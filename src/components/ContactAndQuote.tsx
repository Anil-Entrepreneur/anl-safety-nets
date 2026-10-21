import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

interface ContactAndQuoteProps {
  initialService?: string;
}

export const ContactAndQuote: React.FC<ContactAndQuoteProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: initialService || "Balcony Safety Nets",
    locality: "Kukatpally",
    dimensions: "",
    notes: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmittedPayload, setLastSubmittedPayload] = useState<string>("");

  const serviceOptions = [
    "Balcony Safety Nets",
    "Invisible Grills",
    "Bird & Pigeon Protection Nets",
    "Children Safety Nets",
    "Balcony Protection Solutions",
    "Custom Requirement"
  ];

  const localityOptions = [
    "Kukatpally",
    "LB Nagar",
    "Miyapur",
    "Gachibowli",
    "Madhapur",
    "Kondapur",
    "Dilsukhnagar",
    "Secunderabad",
    "Other Hyderabad Area"
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // Indian phone number validation (10 digits, optionally with +91 or leading 0)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    const isValidPhone =
      /^(\+?91)?[6-9]\d{9}$/.test(formData.phone.trim()) ||
      /^[6-9]\d{9}$/.test(cleanPhone);

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your mobile phone number.";
    } else if (!isValidPhone) {
      newErrors.phone = "Please enter a valid 10-digit mobile number (e.g. 9704042577).";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Duplicate submission check
    const currentPayload = JSON.stringify(formData);
    if (currentPayload === lastSubmittedPayload) {
      setErrors({
        form: "This quote enquiry has already been initiated. Please reach out via WhatsApp or Phone if you need immediate assistance."
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp message fallback (real direct communication with ANL Safety Nets)
    const whatsappUrl = BUSINESS_CONFIG.getWhatsAppQuoteUrl({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      serviceType: formData.serviceType,
      locality: formData.locality,
      message: `${formData.dimensions ? `Dimensions: ${formData.dimensions}. ` : ""}${formData.notes}`
    });

    try {
      // Record submission and forward user to WhatsApp enquiry
      setLastSubmittedPayload(currentPayload);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Open WhatsApp with prefilled quote information
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setIsSubmitting(false);
      setErrors({
        form: "Unable to launch WhatsApp automatically. Please click the WhatsApp button directly below."
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full">
            Contact &amp; Site Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Get in Touch with ANL Safety Nets
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Ready to secure your balcony or windows? Reach out for a free site inspection and customized quotation across Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                ANL Safety Nets
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contact us directly via phone, WhatsApp, or email to discuss your safety net or invisible grill installation requirements.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-5">
              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                <div className="p-3 rounded-xl bg-orange-500 text-white shrink-0 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Call Directly
                  </h4>
                  <a
                    href={BUSINESS_CONFIG.callUrl}
                    className="font-bold text-slate-900 hover:text-primary text-lg block mt-0.5"
                  >
                    {BUSINESS_CONFIG.displayPhone}
                  </a>
                  <span className="text-xs text-slate-500">
                    Available for enquiries across Hyderabad
                  </span>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0 shadow-sm">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    WhatsApp Chat
                  </h4>
                  <a
                    href={BUSINESS_CONFIG.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-emerald-700 text-lg block mt-0.5"
                  >
                    +91 {BUSINESS_CONFIG.whatsappNumber}
                  </a>
                  <span className="text-xs text-slate-500">
                    Fast response &amp; instant photo quotes
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-3 rounded-xl bg-slate-700 text-white shrink-0 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Email Address
                  </h4>
                  <a
                    href={BUSINESS_CONFIG.emailUrl}
                    className="font-bold text-slate-900 hover:text-primary text-sm sm:text-base block mt-0.5 break-all"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                  <span className="text-xs text-slate-500">
                    Send detailed architectural drawings or requirements
                  </span>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="p-3 rounded-xl bg-blue-600 text-white shrink-0 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Primary Service Areas
                  </h4>
                  <p className="font-bold text-slate-900 text-base mt-0.5">
                    Kukatpally &amp; LB Nagar, Hyderabad
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Serving residential apartments, gated communities, and individual homes across Hyderabad, Telangana.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-lg">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-2">
                Request a Free Quotation
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Fill in your details below. Your request will be prepared and forwarded directly to ANL Safety Nets.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">Quote Request Prepared!</h5>
                    <p className="text-xs text-emerald-700 mt-1">
                      Your quotation request has been opened in WhatsApp to connect directly with ANL Safety Nets. You can also call us directly at {BUSINESS_CONFIG.displayPhone}.
                    </p>
                  </div>
                </div>
              )}

              {errors.form && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs">{errors.form}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="e.g. Ramesh Reddy"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.name ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:ring-primary"
                    } focus:outline-none focus:ring-2 text-slate-900 text-sm`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Mobile Phone & Locality Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="e.g. 9704042577"
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.phone ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:ring-primary"
                      } focus:outline-none focus:ring-2 text-slate-900 text-sm`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="quote-locality" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Locality in Hyderabad
                    </label>
                    <select
                      id="quote-locality"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 text-sm"
                    >
                      {localityOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Type & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Required Service
                    </label>
                    <select
                      id="quote-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 text-sm"
                    >
                      {serviceOptions.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 text-sm"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Dimensions or Notes */}
                <div>
                  <label htmlFor="quote-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Approximate Dimensions or Notes (Optional)
                  </label>
                  <textarea
                    id="quote-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Balcony length 12ft x height 8ft on the 5th floor in Kukatpally."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 text-sm resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:from-primary-hover hover:to-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/20 transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Quote Request</span>
                </button>

                <p className="text-center text-[11px] text-slate-500 pt-1">
                  We respect your privacy. No spam. You will be connected directly with ANL Safety Nets on WhatsApp/Phone.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
