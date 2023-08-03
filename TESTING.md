![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Testing

Throughout the entire development process, I conducted continuous testing, making use of Chrome developer tools to identify and troubleshoot any issues as I progressed.

## Mentors feedback:

### During my mid-project meeting with my mentor Narender, the following issues were brought up and been resolved:

- Initially, the images were aligned in columns on small screens, which caused a reduction in photo quality. This problem was resolved by rearranging them in a row.

- In the faq.html page, when tapping on one question and then tapping on another, the first question should close. This issue was fixed.

- To respect user privacy, the phone and city details were removed from the form.

- In order to improve code organisation, in-line CSS from the footer was removed and placed in the CSS file.

- To enhance the website's semantics, the div elements in the Gallery and FAQs pages were replaced with semantic elements like Section.

- Striking the right balance between semantic and non-semantic elements was achieved (e.g., h1 > p). To accommodate a bigger sentence under the small one on the home page, the p tag was changed to div followed by a h2.

- An image (photographer) was added to the About Me section on the contact.html page. The image was positioned on the right with text on the left.

- Instead of using IDs, classes were utilized for better code modularity.

- The use of !important in the CSS was removed, and custom classes were employed for styling.

- For better image optimization, all images were converted to Webp files using cloudconvert.com, replacing the previous png/jpeg formats.


### Upon submitting my website for peer code review on Slack, several points were raised by mentor Harry Dhillon:

- The social media icons in the footer had no links. I promptly added links for all 3 social media platforms.

- The 'more reviews' button on the home page was non-functional. Originally, I intended to create a review.html page with more reviews, but due to time constraints, I postponed it. However, I later resolved this issue by creating the review page and linking it to the button.

- To improve user experience, Harry suggested indicating the active page on the nav bar, so users can easily identify the current page, whether it's the Gallery page or the home page.

- The 'more detail' button below the gallery images on the home page was changed to 'view gallery' based on Harry's feedback. This provides better clarity to users, as they are redirected to the gallery page instead of expecting more details.

- An important issue highlighted by Harry was the stretched image on the contacts page at smaller resolutions. I resolved this problem by adding a media query to reduce the image's height to 300px, as it was originally set to 600px.

- After my final mentor session, the following fixes were implemented:

- Removed the white space on top of the Navbar when viewed on a small screen (Pixel 5).

- Added descriptions for photos in the gallery section of index.html.

- Reduced the size of the placeholder text in the form's textarea.

- Addressed the issue of the stretched-out paragraph on the FAQs page when viewed on Pixel 5 by adding white space.

- Converted all photos to webp format in both the Gallery page and the gallery section on the index page using cloudconvert.com.


### Additionally, the following suggestions from Narender were also addressed on my final mentor session:

- Placed nav inside the header element.

- Consolidated all common CSS codes, such as navbar and footer styles, into Style.css to avoid redundancy.

- Created a JavaScript file and moved the faqs JavaScript code into that file.


### Other bugs that were resolved include:

- Moving all script elements to the bottom of the body on every page.

- Removing the :hover effect from all images on both Home and Gallery pages for small screens.

- Adding a confirmation.html page with a simple message to pop up after the user successfully fills out the form.

- Aligning questions left on the FAQs page for small screens (some were centered).

- Fixing the font-weight issue in buttons.

- Removing any unused CSS code.

- Correcting the image size on the Contact us page.

- Addressing the error of a button being a descendant of an anchor tag by removing the button and styling the anchor element instead.

- Adding a margin between the paragraph and image on the Contact us page.

- Removing unnecessary spaces and slashes in ending tags.

- Ensuring proper spacing between elements inside the form.

- Adding description meta tags to all pages for better search engine optimization and user understanding.


## Validator Testing

The HTML on all pages of the website underwent validation using the W3C validator. Additionally, the style.css file was also validated using the same tool for CSS validation.

- The website is valid with no errors or warnings, view results below:

index.html
![index.html](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/index.html.png)

gallery.html
![gallery.html](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/gallery.html.png)

faqs.html
![faqs.html](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/faqs.html.png)

contact.html
![contact.html](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/contact.html.png)

review.html
![review.html](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/review.html.png)

confirmation.html
![confirmation.html](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/confirmation.html.png)

CSS validator
![CSS](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/cssvalidator.png)


## Testing User Stories from the User Experience (UX) Section

### First time visitors:

Easy Navigation: The home page has a clear navigation menu at the top, allowing visitors to easily access other sections of the website. The logo at the top and bottom of the pages allows visitors to navigate back to the home page.

![navbar](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/navbar.png)

The navigation bar effortlessly adjusts to various screen sizes, showcasing impeccable responsiveness.

![responsiveness](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/responsive.png)

Visually appealing experience: The home page includes a hero section with an image showcasing the photographer's work, giving visitors a glimpse of their artistic style.
There is also a set style with a colour theme, specific fonts and a consistent navbar and footer throughout all pages.

![hero-section](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/hero-section.png)

Checking for services and special offers: Visitors can check the service section in the home page to check for any new sessions and special offers which can be regularly updated.

![services](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/services.png)

Gathering Information: The home page provides a section for the testimonials which will help a first-time visitor to gather information and help them decide if the service is fit for them.

![testimonials](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/testimonial.png)

Contacting or Booking a Session: The home page includes a prominent call-to-action buttons that directs visitors to the Contact Us page to inquire about sessions.

![CTA-button](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/cta-button1.png)

![CTA-button](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/cta-button2.png)

### Returning Visitors Goals:

Revisiting the gallery: Returning visitors can easily access the gallery from the home page to gather inspiration, remind themselves of the photographer's style, or explore new additions to the gallery.

![gallery](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/gallery-section.png)

Exploring FAQs: Returning visitors may have further questions or need support, and the FAQs page provides them with a valuable resource to find answers or seek assistance.

![FAQs](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/faqs.png)

The FAQs page includes a call-to-action button that encourages visitors to contact the photographer if their question is not listed.

![faqs-button](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/faqs-button.png)

Seeking Contact Information or Support: returning visitors can book a session through the booking form in the contact us page which give them option to choose the session they want.

![form](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/form1.png)

![form](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/form2.png)

The Contact Us page also offers various contact methods for this purpose including information of email, phone, and address details as well as the location in the map.

![location](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/location-details.png)

### Frequent Visitors Goals:

Monitoring for Special Events: Frequent visitors might frequently visit the gallery to look for any newly added photos.
![gallery](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/gallery.png)

Engaging with social media or Community: Loyal and enthusiastic frequent visitors might want to stay in touch and check for the latest posts through the social media, which is accessible in the footer of all pages.
![footer](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/footer.png)


## Lighthouse

## Cross-browser Testing

- Google Chrome

- Firefox

- Microsoft Edge

- Safari

## Compatibility and Responsiveness Testing
I thoroughly conducted testing of the site on various devices, including my desktop monitor, HP ENVY x360 15.6" laptop, Samsung Galaxy S23 Android smartphone, Apple iPhone 13 Pro Max, and Samsung Galaxy S7+ tablet.

The results were outstanding, as the site loaded seamlessly and operated flawlessly on all these devices. Furthermore, the content adapted perfectly to each screen size as intended.

- HP Envy Laptop

- Samsung Galaxy S23 Android

- iPhone 13 Pro Max

- Samsung Galaxy S7+ tablet


## Further Testing


