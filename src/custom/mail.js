import emailjs from '@emailjs/browser';

export const sendEmail = async (e) => {
  e.preventDefault();
  const result = await emailjs.sendForm('service_3o7yj2l', 'template_f93q6ih', e.target, 'user_xh9IfZkUXBFEaLGFTpMp2')
  return result
};
