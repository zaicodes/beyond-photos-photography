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

- Making the social links open in a new tab by adding the target=”_blank” and rel=”noopener” attributes.



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

To assess the performance, accessibility, best practices, and SEO of the website, I utilized Lighthouse, a powerful tool available within the Chrome Developer Tools. This enabled me to thoroughly test and evaluate different aspects of the website's performance, ensuring it meets the highest standards across all key areas.

The following are the results:

- Home page:

![index desktop](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/index-desktop.png)


![index mobile](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/index-mobile.png)

- Issues:

![index issue](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/index-issue.png)

This particular issue was identified not only in the desktop Lighthouse report but also in the mobile Lighthouse report. Initially there were varying sizes of the photos used in the gallery section. I took the initiative to reduce their dimensions, ensuring that all photos appear consistent and presentable to users across different devices.

Although resolving this issue was an option, I made a conscious decision not to amend it for the sake of my website's UI. The consistent photo sizes add a fixed and visually appealing element to the page, enhancing the overall user experience. 


- Faqs page:

![faqs desktop](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/faqs-desktop.png)


![faqs mobile](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/faqs-mobile.png)


- Gallery page:

![gallery desktop](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/gallery-desktop.png)

![gallery mobile](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/gallery-mobile.png)


- Contact us page:

![contact desktop](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/contact-desktop.png)


![contact mobile](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/contact-mobile.png)

- Issues: 

The specific issue that surfaced in the desktop Lighthouse report is related to the integration of the Google Map used on the page. Given the significance of this map for my project, I encountered difficulties in resolving the problem. Despite my efforts, the issue persisted. Due to the map's essential role in the project, I have made the decision to leave it as is for the time being, ensuring that users can continue to access and utilize the map's functionalities on the desktop version of the website.

![contact issue 1](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/contact-issue1.png)

During the testing with Lighthouse on mobile devices, I encountered a related issue caused by the image aspect ratio. Initially, the image's height and width settings made it appear stretched on small screens. However, I was able to resolve this concern by incorporating a media query, following the advice provided by Harry. Since maintaining proper image aspect ratio is crucial for the success of my project, I decided to retain this solution as it effectively addressed the problem and ensured an optimal visual presentation on all devices.

![contact issue 2](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/contact-issue2.png)


## Cross-browser Testing

I conducted thorough testing of the website across various internet browsers, including Firefox, Microsoft Edge, and Google Chrome. I am pleased to report that all the results were successful. The website performed flawlessly as expected, without encountering any issues.


- Google Chrome

![Google Chrome](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/chrome.png)


- Firefox

![Firefox](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/firefox.png)


- Microsoft Edge

![Edge](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/edge.png)



## Compatibility and Responsiveness Testing
I thoroughly conducted testing of the site on various devices, including my desktop monitor, HP ENVY x360 15.6" laptop, Samsung Galaxy S23 Android smartphone, Apple iPhone 13 Pro Max, and Samsung Galaxy S7+ tablet.

The results were outstanding, as the site loaded seamlessly and operated flawlessly on all these devices. Furthermore, the content adapted perfectly to each screen size as intended.

- HP Envy Laptop

![HP laptop 1](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/hp.1.png)

![HP laptop 2](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/hp.2.png)

![HP laptop 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/hp.3.png)


- Samsung Galaxy S23 Android

![Samsung Phone 1](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/samsung.phone.jpg)

![Samsung Phone 2](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/samsung.phone2.jpg)

![Samsung Phone 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/samsung.phone3.jpg)


- iPhone 13 Pro Max

![Samsung Phone 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/iphone.1.jpg)

![Samsung Phone 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/iphone.2.jpg)

![Samsung Phone 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/iphone.3.jpg)



- Samsung Galaxy S7+ tab

![Samsung tab 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/samsung.tab.jpg)

![Samsung tab 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/samsung.tab2.jpg)

![Samsung tab 3](https://github.com/zaicodes/beyond-photos-photography/blob/main/documentation/testing/samsung.tab3.jpg)


## Further Testing

To ensure the functionality and responsiveness of my website, I conducted comprehensive testing using various browsers, including Google Chrome, Safari, and Mozilla Firefox, on different devices such as the MacBook Pro 14-inch and iPhone 13 Pro.

### Testing Links:

On the index page, I thoroughly tested each link, and they all worked as expected. Links leading to external pages, such as the social media links, opened correctly in separate browser tabs. The same meticulous testing was performed on the gallery page, faqs page, contact page and even the confirmation page. All links functioned correctly, and external links opened in separate tabs as intended.

### Contact Us Form Testing:

I thoroughly tested the contact us form to ensure its functionality. When attempting to submit the form without filling in any input fields, the form correctly directed users to fill in the first name field. After providing the first name, I tried submitting again, and the form guided me to fill out the last name field. The process continued seamlessly, prompting me to fill the email etc.

I experimented with different combinations of filled and empty fields. Whenever a field was left empty, the form accurately directed me to fill it in before submission. Furthermore, I conducted thorough testing on the select option drop-down list in the form. If the user failed to select an option from the drop-down list, the form promptly reminded them to complete the other required fields before submission.

Incorporating date selection in the form, I meticulously tested various scenarios. To ensure data accuracy and validity, I strictly prevented users from selecting dates before 4th August by setting it as the start date. If a user attempted to leave the date unselected, the form would prompt them to choose a date before proceeding. Additionally, the textarea was set to require a minimum of 10 characters to prevent submissions without any content.

Even when the form was submitted with minimal information or left completely empty, the form provided clear instructions on the missing fields, guiding users to complete the necessary information before successful submission. Once the form was successfully submitted, it would open the confirmation page in the same browser window. After a few seconds, the confirmation page would automatically redirect the user back to the home page, creating a seamless user experience. This feature ensures that users receive instant confirmation while effortlessly navigating back to the main page.

Through rigorous testing, I ensured that the contact us form works seamlessly, providing users with a smooth and user-friendly experience for getting in touch with the photographer.


