/**
 * Contact Form Component
 * Accessible contact form with validation and email integration
 */

"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useSwitch } from '@/components/Context/SwitchContext'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useReducedMotion } from '@/hooks/useAccessibility'
import { designSystem } from '@/constants/designSystem'
import toast from 'react-hot-toast'

// Form validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  persona: z.enum(['francisco', 'frankhurt']),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  className?: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const { isSwitchOn } = useSwitch()
  const { trackContactInteraction } = useAnalytics()
  const shouldReduceMotion = useReducedMotion()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      persona: isSwitchOn ? 'frankhurt' : 'francisco',
    },
  })

  // Update persona when switch changes
  React.useEffect(() => {
    setValue('persona', isSwitchOn ? 'frankhurt' : 'francisco')
  }, [isSwitchOn, setValue])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    trackContactInteraction('contact_form_submit')

    try {
      // Simulate API call - replace with actual email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Message sent successfully! I\'ll get back to you soon.')
      reset()
      trackContactInteraction('contact_form_success', true)
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Failed to send message. Please try again or contact me directly.')
      trackContactInteraction('contact_form_error', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = `w-full px-3 py-2 bg-folderWhite dark:bg-darkerBlue border-2 border-primaryBlue dark:border-folderCream rounded-none text-inkBlack dark:text-backgroundCreamDark placeholder-gray-500 dark:placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2 transition-colors duration-200 ${designSystem.typography.fontSize.base}`

  const labelClasses = `block font-medium mb-2 text-inkBlack dark:text-backgroundCreamDark ${designSystem.typography.fontSize.sm}`

  const errorClasses = `text-red-500 dark:text-red-400 text-sm mt-1`

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${className}`}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name *
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className={inputClasses}
          placeholder="Your full name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" className={errorClasses} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email *
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          className={inputClasses}
          placeholder="your.email@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className={errorClasses} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject *
        </label>
        <input
          {...register('subject')}
          id="subject"
          type="text"
          className={inputClasses}
          placeholder="What's this about?"
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p id="subject-error" className={errorClasses} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell me about your project or opportunity..."
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Hidden Persona Field */}
      <input
        {...register('persona')}
        type="hidden"
      />

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="btn w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        aria-describedby="submit-status"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Icon icon="simple-icons:loading" className="text-lg" />
            </motion.div>
            Sending...
          </>
        ) : (
          <>
            <Icon icon="simple-icons:send" className="text-lg" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Status Message */}
      <div id="submit-status" className="sr-only">
        {isSubmitting ? 'Sending your message...' : 'Ready to send your message'}
      </div>

      {/* Privacy Notice */}
      <p className={`text-xs text-gray-500 dark:text-gray-400 mt-4 ${designSystem.typography.fontSize.xs}`}>
        Your information is kept private and secure. I typically respond within 24 hours.
      </p>
    </motion.form>
  )
}

export default ContactForm