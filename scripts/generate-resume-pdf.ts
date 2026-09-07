import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter size (612 x 792 points)
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  // Embed standard Helvetica fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const colorPrimary = rgb(0.05, 0.05, 0.05);     // Near black
  const colorSubtitle = rgb(0.02, 0.45, 0.65);    // Teal / Blue
  const colorDarkGray = rgb(0.25, 0.25, 0.25);    // Dark gray
  const colorRule = rgb(0.85, 0.85, 0.85);        // Subtle divider
  const colorHeaderRule = rgb(0.15, 0.5, 0.7);    // Blue line under header

  let y = height - 36;
  const leftMargin = 40;
  const rightMargin = width - 40;
  const contentWidth = rightMargin - leftMargin;

  // Helper to draw centered text
  function drawCenteredText(text: string, size: number, font: any, color: any, yPos: number) {
    const textWidth = font.widthOfTextAtSize(text, size);
    page.drawText(text, {
      x: (width - textWidth) / 2,
      y: yPos,
      size,
      font,
      color,
    });
  }

  // Helper to wrap and draw paragraph text
  function drawWrappedText(text: string, x: number, yPos: number, maxWidth: number, size: number, font: any, color: any, lineHeight: number = 13.5): number {
    const words = text.split(' ');
    let currentLine = '';
    let curY = yPos;

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth > maxWidth && currentLine) {
        page.drawText(currentLine, { x, y: curY, size, font, color });
        curY -= lineHeight;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, { x, y: curY, size, font, color });
      curY -= lineHeight;
    }
    return curY;
  }

  // Helper to draw section header
  function drawSectionHeader(title: string) {
    y -= 10;
    page.drawText(title, {
      x: leftMargin,
      y,
      size: 9.5,
      font: fontBold,
      color: colorPrimary,
    });
    y -= 4;
    page.drawLine({
      start: { x: leftMargin, y },
      end: { x: rightMargin, y },
      thickness: 0.8,
      color: colorRule,
    });
    y -= 10;
  }

  // 1. Header
  drawCenteredText('SACHIN YADAV', 19, fontBold, colorPrimary, y);
  y -= 15;

  drawCenteredText('Full Stack Developer', 11, fontBold, colorSubtitle, y);
  y -= 14;

  const contactLine = 'Surat, Gujarat, India  |  +91 7822900241  |  yadavsachin7249407392@gmail.com';
  drawCenteredText(contactLine, 8.5, fontRegular, colorDarkGray, y);
  y -= 12;

  const linksLine = 'Portfolio: sachinyadav2002.vercel.app  |  LinkedIn: linkedin.com/in/sachin-yadav-20a79b231  |  GitHub: github.com/SachinYadav2002';
  drawCenteredText(linksLine, 8.5, fontRegular, colorSubtitle, y);
  y -= 10;

  // Blue divider below header
  page.drawLine({
    start: { x: leftMargin, y },
    end: { x: rightMargin, y },
    thickness: 1.2,
    color: colorHeaderRule,
  });
  y -= 6;

  // 2. Professional Summary
  drawSectionHeader('PROFESSIONAL SUMMARY');
  const summaryText = 'Results-driven Full Stack Developer with expertise in building scalable, high-performance web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Proven track record in transforming Figma UI/UX designs into modular components, engineering RESTful APIs, and optimizing web performance. Skilled in clean code principles, state management, and modern responsive design.';
  y = drawWrappedText(summaryText, leftMargin, y, contentWidth, 8.5, fontRegular, colorDarkGray, 12);
  y -= 2;

  // 3. Technical Skills
  drawSectionHeader('TECHNICAL SKILLS');
  const skills = [
    { category: 'Frontend:', items: 'React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, SCSS' },
    { category: 'Backend:', items: 'Node.js, Express.js, RESTful APIs, Microservices Architecture' },
    { category: 'Databases:', items: 'MongoDB, MySQL' },
    { category: 'Tools & Methods:', items: 'Git, GitHub, Figma, Webpack, Performance Optimization, Agile/Scrum Methodologies' },
  ];

  for (const s of skills) {
    page.drawText(s.category, { x: leftMargin, y, size: 8.5, font: fontBold, color: colorPrimary });
    page.drawText(s.items, { x: leftMargin + 82, y, size: 8.5, font: fontRegular, color: colorDarkGray });
    y -= 13;
  }
  y -= 2;

  // 4. Work Experience
  drawSectionHeader('WORK EXPERIENCE');
  // Title row with period
  page.drawText('Front End Developer', { x: leftMargin, y, size: 9, font: fontBold, color: colorPrimary });
  const periodText = '02/2025 – 08/2026';
  const periodWidth = fontBold.widthOfTextAtSize(periodText, 8.5);
  page.drawText(periodText, { x: rightMargin - periodWidth, y, size: 8.5, font: fontBold, color: colorDarkGray });
  y -= 11;

  // Company and location
  page.drawText('Suvya Web — Surat, Gujarat', { x: leftMargin, y, size: 8.5, font: fontOblique, color: colorSubtitle });
  y -= 11;

  const expBullets = [
    'Engineered responsive, cross-browser web interfaces using React.js and Next.js, delivering smooth user experiences across mobile and desktop devices.',
    'Translated Figma/UI mockups into high-quality, reusable components leveraging Tailwind CSS, SCSS, and semantic HTML5.',
    'Developed and integrated RESTful APIs using Express.js and MongoDB, streamlining client-server data flow and system responsiveness.',
    'Optimized frontend performance through lazy loading, code splitting, and bundle size reduction, cutting initial load times by 30%.',
    'Collaborated with cross-functional design and engineering teams to ensure UI consistency, strict accessibility, and feature alignment.',
    'Utilized Git and GitHub for version control, conducting peer code reviews and managing structured workflow branching strategies.',
  ];

  for (const b of expBullets) {
    page.drawText('•', { x: leftMargin + 4, y, size: 8.5, font: fontBold, color: colorSubtitle });
    y = drawWrappedText(b, leftMargin + 14, y, contentWidth - 14, 8.5, fontRegular, colorDarkGray, 11.5);
    y -= 1;
  }
  y -= 2;

  // 5. Key Projects
  drawSectionHeader('KEY PROJECTS');
  
  // Project 1
  page.drawText('Electro-E-Commerce Platform', { x: leftMargin, y, size: 9, font: fontBold, color: colorPrimary });
  const proj1Tech = ' | Next.js, TypeScript, Tailwind CSS';
  const proj1NameWidth = fontBold.widthOfTextAtSize('Electro-E-Commerce Platform', 9);
  page.drawText(proj1Tech, { x: leftMargin + proj1NameWidth, y, size: 8.5, font: fontRegular, color: colorDarkGray });
  y -= 11;

  const p1Bullets = [
    'Architected a modern e-commerce application using Next.js server-side rendering for optimal page speed and SEO ranking.',
    'Implemented strict TypeScript typing across all components, reducing production defects and improving code maintainability.',
    'Designed fully adaptive layout components for seamlessly consistent user experiences across mobile, tablet, and desktop screens.',
  ];
  for (const b of p1Bullets) {
    page.drawText('•', { x: leftMargin + 4, y, size: 8.5, font: fontBold, color: colorSubtitle });
    y = drawWrappedText(b, leftMargin + 14, y, contentWidth - 14, 8.5, fontRegular, colorDarkGray, 11.5);
    y -= 1;
  }
  y -= 4;

  // Project 2
  page.drawText('Headphone Showcase Application', { x: leftMargin, y, size: 9, font: fontBold, color: colorPrimary });
  const proj2Tech = ' | React.js, CSS3';
  const proj2NameWidth = fontBold.widthOfTextAtSize('Headphone Showcase Application', 9);
  page.drawText(proj2Tech, { x: leftMargin + proj2NameWidth, y, size: 8.5, font: fontRegular, color: colorDarkGray });
  y -= 11;

  const p2Bullets = [
    'Developed an interactive React.js application featuring dynamic state management, smooth transition animations, and modern UI elements.',
  ];
  for (const b of p2Bullets) {
    page.drawText('•', { x: leftMargin + 4, y, size: 8.5, font: fontBold, color: colorSubtitle });
    y = drawWrappedText(b, leftMargin + 14, y, contentWidth - 14, 8.5, fontRegular, colorDarkGray, 11.5);
    y -= 1;
  }
  y -= 2;

  // 6. Education
  drawSectionHeader('EDUCATION');
  page.drawText('BCA (Bachelor of Computer Applications)', { x: leftMargin, y, size: 9, font: fontBold, color: colorPrimary });
  const compText = 'Completed: 02/2024';
  const compWidth = fontBold.widthOfTextAtSize(compText, 8.5);
  page.drawText(compText, { x: rightMargin - compWidth, y, size: 8.5, font: fontBold, color: colorDarkGray });
  y -= 11;

  page.drawText('C D Jain College of Commerce — Shrirampur, Maharashtra', { x: leftMargin, y, size: 8.5, font: fontOblique, color: colorSubtitle });
  y -= 11;

  const acadText = 'Academic Performance: TY BCA: 9.04 CGPA  |  SY BCA: 8.86 CGPA  |  FY BCA: 8.33 CGPA';
  page.drawText(acadText, { x: leftMargin, y, size: 8.5, font: fontRegular, color: colorDarkGray });
  y -= 6;

  // 7. Languages & Interests
  drawSectionHeader('LANGUAGES & INTERESTS');
  page.drawText('Languages:', { x: leftMargin, y, size: 8.5, font: fontBold, color: colorPrimary });
  page.drawText('English (Professional), Hindi (Native), Marathi (Working)', { x: leftMargin + 54, y, size: 8.5, font: fontRegular, color: colorDarkGray });
  
  page.drawText('Interests:', { x: leftMargin + 310, y, size: 8.5, font: fontBold, color: colorPrimary });
  page.drawText('Modern Web Frameworks, Technical Reading, Kabaddi', { x: leftMargin + 355, y, size: 8.5, font: fontRegular, color: colorDarkGray });

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const outputPath = path.join(publicDir, 'Sachin_Yadav_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated PDF at:', outputPath, 'Size:', pdfBytes.length);
}

generateResumePdf().catch(console.error);
