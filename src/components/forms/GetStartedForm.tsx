'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ChevronLeft, Mail, Phone, MessageCircle } from 'lucide-react';

const SERVICES_LIST = [
  { id: 'Web Development', label: 'Web Development', icon: '🌐' },
  { id: 'App Development', label: 'App Development', icon: '📱' },
  { id: 'AI Solutions', label: 'AI Solutions & Automation', icon: '🤖' },
  { id: 'Meta Ads Management', label: 'Meta Ads Management', icon: '📈' },
  { id: 'Data Scraping', label: 'Data Scraping', icon: '🔍' },
];

const SUB_SERVICES: Record<string, string[]> = {
  'Web Development': ['Business Website', 'E-commerce Store', 'Portfolio Website', 'Landing Page', 'Custom Web App'],
  'App Development': ['SaaS App', 'E-commerce App', 'Booking/Reservation App', 'Social Media App', 'Other'],
  'Meta Ads Management': ['Facebook Ads Only', 'Instagram Ads Only', 'Full Meta Suite', 'Retargeting Campaign'],
  'Data Scraping': ['Competitor Analysis', 'Market Research', 'Lead Generation', 'Price Monitoring'],
};

const AI_SOLUTIONS = {
  'Business AI': ['WhatsApp Agent', 'Facebook Automation', 'Instagram DM Bot', 'Email Automation', 'CRM Automation', 'Custom Workflow'],
  'Web AI Assistant': ['Customer Support Chatbot', 'Lead Qualification Bot', 'Product Recommendation AI', 'Knowledge Base AI'],
};

const BUDGET_OPTIONS = [
  {
    value: 'starter',
    label: 'Starter',
    sublabel: 'Starting from ৳7,000',
    description: 'Perfect for small projects — landing pages, simple automations, basic websites',
    note: 'Ideal for early-stage businesses',
  },
  {
    value: 'growth',
    label: 'Growth',
    sublabel: '৳15,000 – ৳50,000',
    description: 'Web apps, AI automations, Meta Ads campaigns, or multi-page websites',
    note: 'Most popular for growing businesses',
    popular: true,
  },
  {
    value: 'professional',
    label: 'Professional',
    sublabel: '৳50,000 – ৳1,50,000',
    description: 'Complex builds — full-stack apps, advanced AI agents, complete digital systems',
    note: 'For businesses serious about scaling',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    sublabel: 'Custom Pricing',
    description: 'Large-scale projects, long-term partnerships, or enterprise-grade solutions',
    note: "Let's discuss your requirements",
  },
];
const TIMELINES = ['ASAP', '1-3 Months', '3-6 Months', 'Flexible'];

// We store everything in a single state
type FormState = {
  service: string;
  subService: string;
  aiSubType?: string; // e.g. Business AI or Web AI Assistant
  company: string;
  website: string;
  industry: string;
  audience: string;
  goal: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  whatsapp: string;
  contactMethod: 'Email' | 'WhatsApp' | 'Phone';
  notes: string;
};

const initialState: FormState = {
  service: '',
  subService: '',
  aiSubType: '',
  company: '',
  website: '',
  industry: '',
  audience: '',
  goal: '',
  budget: '',
  timeline: '',
  name: '',
  email: '',
  whatsapp: '',
  contactMethod: 'Email',
  notes: '',
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export const GetStartedForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  // Input handlers
  const updateData = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const nextStep = () => {
    // Validate current step
    const newErrors: Record<string, string> = {};

    if (step === 1 && !formData.service) newErrors.service = 'Please select a service.';
    if (step === 2) {
      if (formData.service === 'AI Solutions') {
        if (!formData.aiSubType || !formData.subService) newErrors.subService = 'Please select an AI solution.';
      } else {
        if (!formData.subService) newErrors.subService = 'Please select an option.';
      }
    }
    if (step === 3) {
      if (!formData.industry) newErrors.industry = 'Industry is required.';
      if (!formData.goal) newErrors.goal = 'Primary goal is required.';
    }
    if (step === 4) {
      if (!formData.budget) newErrors.budget = 'Please select a budget.';
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline.';
    }
    if (step === 5) {
      if (!formData.name) newErrors.name = 'Name is required.';
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
      if (!formData.whatsapp) newErrors.whatsapp = 'WhatsApp number is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (step < 5) setStep((s) => s + 1);
    else submit();
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const submit = async () => {
    // IMMEDIATELY set loading — don't wait for any async
    setStatus('loading');

    // Optimistic: show a brief "processing" message right away
    // Then actually send
    await new Promise(resolve => setTimeout(resolve, 100)); // feels snappier than immediate

    try {
      const budgetLabels: Record<string, string> = {
        'starter': 'Starter (from ৳7,000)',
        'growth': 'Growth (৳15,000 – ৳50,000)',
        'professional': 'Professional (৳50,000 – ৳1,50,000)',
        'enterprise': 'Enterprise (Custom Pricing)',
      };

      const payload = {
        ...formData,
        budget: budgetLabels[formData.budget] || formData.budget,
      };

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setFormData(initialState);
    } catch {
      setStatus('error');
      setErrors({ global: 'Something went wrong. Please email us at optiflowofficialteam@gmail.com' });
    }
  };

  const inputClass = (field: keyof FormState, err: boolean) => {
    const isFilled = !!formData[field] && !err;
    return `w-full bg-white/5 border rounded-xl px-5 py-4 text-white placeholder-white/30 outline-none transition-all duration-300 focus:ring-2 ${
      err
        ? 'border-[#e63946] focus:ring-[#e63946]/40'
        : isFilled
        ? 'border-[#00ff88]/40 focus:border-[#00ff88]/60 focus:ring-[#00ff88]/10'
        : 'border-white/10 focus:border-[#00d4ff]/60 focus:ring-[#00d4ff]/20'
    }`;
  };

  const ErrorMessage = ({ message }: { message?: string }) => (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          className="overflow-hidden"
        >
          <p className="text-[#e63946] text-xs font-medium flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#e63946]" />
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // RENDER HELPERS
  const renderCard = (label: string, isSelected: boolean, onClick: () => void, icon?: string) => (
    <button
      type="button"
      onClick={onClick}
      className={`relative p-6 rounded-2xl border text-left transition-all duration-300 w-full flex flex-col items-start gap-3
        ${isSelected 
          ? 'bg-[#00d4ff]/10 border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.2)] scale-[1.02]' 
          : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
        }`}
    >
      {icon && <span className="text-3xl">{icon}</span>}
      <span className={`text-lg font-bold font-heading ${isSelected ? 'text-[#00d4ff]' : 'text-white'}`}>
        {label}
      </span>
      {isSelected && (
        <div className="absolute top-4 right-4 text-[#00d4ff]">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      )}
    </button>
  );

  return (
    <GlassCard className="p-34 md:p-12 max-w-3xl mx-auto overflow-hidden relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12 gap-6"
          >
            {/* Animated SVG Checkmark */}
            <motion.svg className="w-24 h-24 text-[#00ff88]" viewBox="0 0 50 50">
              <motion.circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
              <motion.path d="M15 25 L22 32 L35 17" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
            </motion.svg>

            <h3 className="text-3xl lg:text-4xl font-black font-heading tracking-tight">Thank You! We&apos;ll Be In Touch Soon</h3>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-34 text-left w-full max-w-sm mt-4">
               <p className="text-white/50 text-sm mb-1 uppercase tracking-widest">Selected Service</p>
               <p className="font-semibold text-lg text-[#00d4ff] mb-4">{formData.service}</p>
               <p className="text-white/50 text-sm mb-1 uppercase tracking-widest">Name</p>
               <p className="font-medium text-white mb-4">{formData.name}</p>
               <p className="text-white/50 text-sm mb-1 uppercase tracking-widest">Preferred Contact</p>
               <p className="font-medium text-white">{formData.contactMethod}</p>
            </div>

            <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-sm">
              {/* Contact promise message */}
              <div className="w-full p-4 rounded-xl bg-[#00ff88]/5 border border-[#00ff88]/20 text-center">
                <p className="text-[#00ff88] font-semibold text-sm">
                  ✓ We will reach out to you very shortly
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Typically within a few hours via your preferred contact method
                </p>
              </div>
              <Button href="/" variant="ghost">Back to Home</Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col w-full"
          >
            {/* Progress Bar & Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {step > 1 ? (
                  <button onClick={prevStep} className="text-white/60 hover:text-white flex items-center gap-1 transition-colors text-sm font-medium">
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}
                <span className="text-[#00d4ff] font-medium text-sm tracking-widest uppercase">
                  Step {step} of 5
                </span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88]"
                  initial={{ width: `${((step - 1) / 5) * 100}%` }}
                  animate={{ width: `${(step / 5) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col gap-21">
                <div className="mb-4">
                  <h2 className="text-3xl font-black font-heading mb-2">What service do you need?</h2>
                  <p className="text-white/60">Select the primary focus for your project.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES_LIST.map((s) => renderCard(s.label, formData.service === s.id, () => {
                    updateData('service', s.id);
                    // Reset step 2 data when changing step 1
                    updateData('subService', '');
                    updateData('aiSubType', '');
                  }, s.icon))}
                </div>
                <ErrorMessage message={errors.service} />
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col gap-21">
                <div className="mb-4">
                  <h2 className="text-3xl font-black font-heading mb-2">Specify your {formData.service} needs</h2>
                  <p className="text-white/60">Choose the exact functionality you&apos;re looking for.</p>
                </div>
                
                {formData.service === 'AI Solutions' ? (
                  <div className="flex flex-col gap-21">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-bold font-heading text-[#00d4ff]">Business AI</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {AI_SOLUTIONS['Business AI'].map((sub: string) => 
                          renderCard(sub, formData.aiSubType === 'Business AI' && formData.subService === sub, () => {
                            updateData('aiSubType', 'Business AI');
                            updateData('subService', sub);
                          })
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-bold font-heading text-[#00ff88]">Web AI Assistant</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {AI_SOLUTIONS['Web AI Assistant'].map((sub: string) => 
                          renderCard(sub, formData.aiSubType === 'Web AI Assistant' && formData.subService === sub, () => {
                            updateData('aiSubType', 'Web AI Assistant');
                            updateData('subService', sub);
                          })
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SUB_SERVICES[formData.service]?.map((sub: string) => 
                      renderCard(sub, formData.subService === sub, () => updateData('subService', sub))
                    )}
                  </div>
                )}
                <ErrorMessage message={errors.subService} />
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col gap-21">
                <div className="mb-4">
                  <h2 className="text-3xl font-black font-heading mb-2">Project Details</h2>
                  <p className="text-white/60">Help us understand the context of your business.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-21">
                  <div>
                    <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Company Name</label>
                    <input value={formData.company} onChange={e => updateData('company', e.target.value)} placeholder="Acme Corp" className={inputClass('company', false)} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Website URL</label>
                    <input value={formData.website} onChange={e => updateData('website', e.target.value)} placeholder="https://example.com" className={inputClass('website', false)} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Industry *</label>
                  <input value={formData.industry} onChange={e => updateData('industry', e.target.value)} placeholder="e.g. E-commerce, Real Estate, Healthcare" className={inputClass('industry', !!errors.industry)} />
                  <ErrorMessage message={errors.industry} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Target Audience</label>
                  <input value={formData.audience} onChange={e => updateData('audience', e.target.value)} placeholder="e.g. B2B SaaS Founders, Local Homeowners" className={inputClass('audience', false)} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Primary Goal *</label>
                  <textarea value={formData.goal} onChange={e => updateData('goal', e.target.value)} rows={3} placeholder="What does success look like for this project?" className={`${inputClass('goal', !!errors.goal)} resize-none`} />
                  <ErrorMessage message={errors.goal} />
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col gap-21">
                <div>
                  <h2 className="text-3xl font-black font-heading mb-2">Budget & Timeline</h2>
                  <p className="text-white/60">Let&apos;s align on timeframe and investment.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-4 uppercase tracking-widest">Estimated Budget *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {BUDGET_OPTIONS.map((option) => (
                      <div
                        key={option.value}
                        className={`relative p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                          formData.budget === option.value
                            ? 'border-[#00d4ff] bg-[#00d4ff]/5 scale-[1.02] shadow-[0_0_20px_rgba(0,212,255,0.2)]'
                            : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                        }`}
                        onClick={() => updateData('budget', option.value)}
                      >
                        {option.popular && (
                          <span className="absolute -top-2.5 right-4 text-xs font-bold px-3 py-0.5 rounded-full text-white"
                            style={{ background: 'linear-gradient(90deg, #9d4edd, #ff006e)' }}>
                            Most Popular
                          </span>
                        )}
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-black font-heading text-lg text-white mb-0.5">{option.label}</p>
                            <p className="text-sm font-bold text-gradient-holographic mb-2">{option.sublabel}</p>
                            <p className="text-white/50 text-xs leading-relaxed">{option.description}</p>
                          </div>
                          {/* Radio indicator */}
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center transition-all ${
                            formData.budget === option.value ? 'border-[#00d4ff] bg-[#00d4ff]' : 'border-white/30'
                          }`}>
                            {formData.budget === option.value && (
                              <div className="w-2 h-2 rounded-full bg-black" />
                            )}
                          </div>
                        </div>
                        <p className="text-white/30 text-xs mt-2 italic">{option.note}</p>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage message={errors.budget} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-4 uppercase tracking-widest">Expected Timeline *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TIMELINES.map((t) => renderCard(t, formData.timeline === t, () => updateData('timeline', t)))}
                  </div>
                  <ErrorMessage message={errors.timeline} />
                </div>
              </motion.div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col gap-21">
                <div className="mb-4">
                  <h2 className="text-3xl font-black font-heading mb-2">Final Details</h2>
                  <p className="text-white/60">How should we reach out to you?</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Full Name *</label>
                  <input value={formData.name} onChange={e => updateData('name', e.target.value)} placeholder="Jane Doe" className={inputClass('name', !!errors.name)} />
                  <ErrorMessage message={errors.name} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-21">
                  <div>
                    <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Email Address *</label>
                    <input type="email" value={formData.email} onChange={e => updateData('email', e.target.value)} placeholder="jane@company.com" className={inputClass('email', !!errors.email)} />
                    <ErrorMessage message={errors.email} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">WhatsApp Number *</label>
                    <input value={formData.whatsapp} onChange={e => updateData('whatsapp', e.target.value)} placeholder="+880 1XXX-XXXXXX" className={inputClass('whatsapp', !!errors.whatsapp)} />
                    <ErrorMessage message={errors.whatsapp} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-4 uppercase tracking-widest">Preferred Contact Method *</label>
                  <div className="flex flex-wrap gap-4">
                    {['Email', 'WhatsApp', 'Phone'].map(method => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => updateData('contactMethod', method as 'Email' | 'WhatsApp' | 'Phone')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all font-medium ${
                          formData.contactMethod === method
                            ? 'bg-[#00d4ff]/10 border-[#00d4ff] text-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {method === 'Email' && <Mail className="w-4 h-4" />}
                        {method === 'WhatsApp' && <MessageCircle className="w-4 h-4" />}
                        {method === 'Phone' && <Phone className="w-4 h-4" />}
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Additional Notes</label>
                  <textarea value={formData.notes} onChange={e => updateData('notes', e.target.value)} rows={3} placeholder="Any other specific constraints or details?" className={`${inputClass('notes', false)} resize-none`} />
                </div>
                
                {errors.global && (
                  <p className="text-[#e63946] text-sm text-center bg-[#e63946]/10 border border-[#e63946]/30 rounded-xl p-4">{errors.global}</p>
                )}
              </motion.div>
            )}

            {/* Navigation Buttons footer */}
            <div className="mt-8 pt-89 border-t border-white/10 w-full">
              <Button
                onClick={nextStep}
                variant="primary"
                size="lg"
                disabled={status === 'loading'}
                className="w-full text-lg h-14 shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                style={{
                  opacity: status === 'loading' ? 0.85 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg
                      style={{ width: 20, height: 20, animation: 'spin 0.8s linear infinite' }}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Sending your request...
                  </span>
                ) : (
                  step === 5 ? 'Send My Request →' : 'Continue'
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};
