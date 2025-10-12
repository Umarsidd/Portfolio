import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo, mockContactSubmission } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await mockContactSubmission(formData);
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-pink-950/30 border border-pink-500/20 rounded-full text-pink-400 text-sm font-semibold uppercase tracking-wider">
              Let's Connect
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-6" />
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <Card className="group relative p-7 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-purple-600/0 group-hover:from-pink-600/5 group-hover:to-purple-600/5 transition-all duration-500" />
                    <div className="relative flex items-start gap-5">
                      <div className="p-4 bg-gradient-to-br from-pink-950/80 to-purple-950/80 border border-pink-500/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-pink-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold mb-2 text-lg">
                          {info.label}
                        </h3>
                        <p className="text-slate-300 text-sm break-all leading-relaxed">
                          {info.value}
                        </p>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-all duration-500" />
                  </Card>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="group relative md:col-span-2 p-10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-purple-600/0 group-hover:from-pink-600/3 group-hover:to-purple-600/3 transition-all duration-500" />
              <form onSubmit={handleSubmit} className="relative space-y-7">
                <div className="grid md:grid-cols-2 gap-7">
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-900/80 border-slate-700/50 text-white focus:border-pink-500 focus:ring-pink-500 placeholder:text-slate-500 h-12 rounded-xl"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-900/80 border-slate-700/50 text-white focus:border-pink-500 focus:ring-pink-500 placeholder:text-slate-500 h-12 rounded-xl"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/80 border-slate-700/50 text-white focus:border-pink-500 focus:ring-pink-500 placeholder:text-slate-500 h-12 rounded-xl"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-slate-900/80 border-slate-700/50 text-white focus:border-pink-500 focus:ring-pink-500 resize-none placeholder:text-slate-500 rounded-xl"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn w-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white py-7 text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/40 border-0 rounded-xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                </Button>
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-all duration-500" />
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
