const fs = require('fs');
const path = require('path');

const moves = [
  { old: 'ContactHeader.tsx', new: 'hero/ContactHero.tsx' },
  { old: 'ContactCards.tsx', new: 'methods/ContactMethods.tsx' },
  { old: 'ContactCard.tsx', new: 'methods/ContactCard.tsx' },
  { old: 'ContactInfo.tsx', new: 'methods/ContactInfo.tsx' },
  { old: 'AvailabilityBadge.tsx', new: 'availability/ContactAvailability.tsx' },
  { old: 'ContactForm.tsx', new: 'form/ContactForm.tsx' },
  { old: 'FormField.tsx', new: 'form/FormField.tsx' },
  { old: 'SubmitButton.tsx', new: 'form/SubmitButton.tsx' },
  { old: 'SocialLinks.tsx', new: 'cta/SocialLinks.tsx' },
];

moves.forEach(m => {
  const oldPath = path.join('components/contact', m.old);
  const newPath = path.join('components/contact', m.new);
  if (fs.existsSync(oldPath)) {
    let content = fs.readFileSync(oldPath, 'utf8');
    content = content.replace(/"\.\/constants"/g, '"../constants"');
    content = content.replace(/"\.\/types"/g, '"../types"');
    content = content.replace(/"\.\/AvailabilityBadge"/g, '"../availability/ContactAvailability"');
    content = content.replace(/"\.\/ContactCards"/g, '"./ContactMethods"');
    content = content.replace(/"\.\/ContactCard"/g, '"./ContactCard"');
    content = content.replace(/"\.\/SocialLinks"/g, '"../cta/SocialLinks"');
    content = content.replace(/"\.\/FormField"/g, '"./FormField"');
    content = content.replace(/"\.\/SubmitButton"/g, '"./SubmitButton"');
    fs.writeFileSync(oldPath, content); 
    fs.renameSync(oldPath, newPath);
  }
});
