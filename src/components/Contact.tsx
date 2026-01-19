import { useFormspark } from '@formspark/use-formspark';
import { CheckCircle, Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { ContactData } from '../types';

interface ContactProps {
  contact: ContactData;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [submit, isSubmitting] = useFormspark({
    formId: contact.formSparkId || ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!contact.formSparkId) {
      console.error('FormSpark ID is not configured');
      setSubmitStatus('error');
      return;
    }

    try {
      await submit(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="space-y-10 scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Let's work together</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Interested in collaborating, discussing opportunities, or learning more about my work? I'm always open to thoughtful conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
              <Mail className="text-gray-600 dark:text-gray-300 group-hover:text-black" size={20} />
            </div>
            <span className="text-lg font-medium text-text-main-light dark:text-text-main-dark">{contact.email}</span>
          </a>
          
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
              <Phone className="text-gray-600 dark:text-gray-300 group-hover:text-black" size={20} />
            </div>
            <span className="text-lg font-medium text-text-main-light dark:text-text-main-dark">{contact.phone}</span>
          </a>
        </div>

        <div className="bg-white dark:bg-card-dark p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <CheckCircle size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                  Thank you!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your message has been sent successfully. I'll get back to you soon.
                </p>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-zinc-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-gray-800 dark:text-gray-200 outline-none transition-shadow" 
                  placeholder="Name" 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-zinc-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-gray-800 dark:text-gray-200 outline-none transition-shadow" 
                  placeholder="Email" 
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-zinc-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-gray-800 dark:text-gray-200 outline-none resize-none transition-shadow" 
                  placeholder="Message" 
                  rows={4}
                />
              </div>
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-2xl text-red-700 dark:text-red-400 text-sm">
                  Something went wrong. Please try again or contact me directly via email.
                </div>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary py-4 rounded-2xl font-bold text-black hover:opacity-90 transition-opacity active:scale-[0.98] transform shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send e-mail'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;