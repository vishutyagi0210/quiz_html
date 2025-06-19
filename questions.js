const questions = [
  // Basics & Syntax (Expanded)
  {
    category: 'Basics & Syntax',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyper Tool Markup Language'
    ],
    answer: 0,
    explanation: 'HTML stands for Hyper Text Markup Language.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Who is known as the father of HTML?',
    options: [
      'Tim Berners-Lee',
      'Bill Gates',
      'Mark Zuckerberg',
      'Steve Jobs'
    ],
    answer: 0,
    explanation: 'Tim Berners-Lee invented HTML at CERN in 1989.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What is the correct HTML element for inserting a line break?',
    options: ['<break>', '<br>', '<lb>', '<line>'],
    answer: 1,
    explanation: 'The <br> tag is a void (empty) tag used to insert a line break.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which character is used to indicate an end tag?',
    options: ['/', '<', '*', '^'],
    answer: 0,
    explanation: 'A forward slash (/) is used to indicate an end tag, e.g., </p>.'
  },
  {
    category: 'Basics & Syntax',
    question: 'How can you create a comment in an HTML document?',
    options: [
      '<!-- This is a comment -->',
      '// This is a comment',
      '/* This is a comment */',
      '# This is a comment'
    ],
    answer: 0,
    explanation: 'HTML comments start with <!-- and end with -->.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What is the correct sequence of HTML tags for starting a webpage?',
    options: [
      '<!DOCTYPE html>, <html>, <head>, <title>, <body>',
      '<head>, <title>, <html>, <body>',
      '<html>, <head>, <body>, <title>',
      '<html>, <body>, <head>, <title>'
    ],
    answer: 0,
    explanation: 'A typical HTML document starts with a DOCTYPE declaration, followed by <html>, <head> (containing <title>), and then <body>.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which tag is used to define the largest heading in HTML?',
    options: ['<h6>', '<heading>', '<h1>', '<head>'],
    answer: 2,
    explanation: '<h1> defines the largest heading; <h6> is the smallest. They are hierarchical.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What is the purpose of the <!DOCTYPE html> declaration?',
    options: [
      'It tells the browser to use the latest HTML standard.',
      'It is a comment and has no effect.',
      'It defines the XML version of the document.',
      'It links to the HTML specification.'
    ],
    answer: 0,
    explanation: '<!DOCTYPE html> tells the browser which version of HTML the page is written in. For HTML5, it\'s simple and standard.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which tag is used to create a paragraph in HTML?',
    options: ['<p>', '<para>', '<paragraph>', '<text>'],
    answer: 0,
    explanation: '<p> is the correct tag for paragraphs.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What is a "void" or "empty" element in HTML?',
    options: [
      'An element with no content and no closing tag.',
      'An element with no attributes.',
      'An element that is commented out.',
      'An element not supported by the browser.'
    ],
    answer: 0,
    explanation: 'Void or empty elements, like <br>, <hr>, and <img>, do not have a closing tag because they cannot contain any content.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What is the latest version of HTML?',
    options: ['HTML4', 'HTML5', 'HTML6', 'XHTML'],
    answer: 1,
    explanation: 'HTML5 is the current and latest version of HTML, released in 2014.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which HTML element is the root element of an HTML page?',
    options: ['<body>', '<head>', '<html>', '<document>'],
    answer: 2,
    explanation: 'The <html> element is the root element and contains all other HTML elements.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What is the correct way to write an HTML element with both opening and closing tags?',
    options: ['<p>Text</p>', '<p>Text<p>', '<p>Text<\\p>', '</p>Text<p>'],
    answer: 0,
    explanation: 'HTML elements with content use opening and closing tags: <tagname>content</tagname>.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which of these is NOT a valid HTML5 element?',
    options: ['<article>', '<section>', '<blink>', '<nav>'],
    answer: 2,
    explanation: '<blink> was deprecated and is not supported in HTML5. It was used to make text blink.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What does the lang attribute in <html lang="en"> specify?',
    options: [
      'The language of the document content',
      'The location of the server',
      'The encoding of the document',
      'The version of HTML'
    ],
    answer: 0,
    explanation: 'The lang attribute specifies the language of the document content, helping screen readers and search engines.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which HTML5 element is self-closing?',
    options: ['<p>', '<div>', '<img>', '<span>'],
    answer: 2,
    explanation: '<img> is a self-closing (void) element that doesn\'t require a closing tag.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What is the difference between HTML and XHTML?',
    options: [
      'XHTML is stricter and follows XML rules',
      'HTML is newer than XHTML',
      'XHTML doesn\'t support CSS',
      'There is no difference'
    ],
    answer: 0,
    explanation: 'XHTML follows XML syntax rules - all tags must be properly closed, lowercase, and well-formed.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which is the correct way to write a self-closing tag in XHTML?',
    options: ['<br>', '<br/>', '<br />', 'Both b and c'],
    answer: 3,
    explanation: 'In XHTML, self-closing tags must end with "/>" with optional space before the slash.'
  },
  {
    category: 'Basics & Syntax',
    question: 'What happens if you don\'t close an HTML tag?',
    options: [
      'The browser will try to auto-close it',
      'The page won\'t load',
      'Only the content inside will be ignored',
      'Nothing, HTML doesn\'t require closing tags'
    ],
    answer: 0,
    explanation: 'Modern browsers have error recovery and will attempt to close unclosed tags, but this can lead to unexpected results.'
  },
  {
    category: 'Basics & Syntax',
    question: 'Which HTML version introduced semantic elements?',
    options: ['HTML 4.01', 'HTML5', 'XHTML 1.0', 'HTML 3.2'],
    answer: 1,
    explanation: 'HTML5 introduced semantic elements like <article>, <section>, <nav>, <header>, <footer>, etc.'
  },

  // Tags & Attributes (Expanded)
  {
    category: 'Tags & Attributes',
    question: 'Which attribute specifies the URL of the page the link goes to?',
    options: ['src', 'href', 'url', 'link'],
    answer: 1,
    explanation: 'The href attribute in an <a> tag specifies the destination URL of a hyperlink.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute is used to open a link in a new tab?',
    options: ['target="_blank"', 'newtab', 'window', 'blank'],
    answer: 0,
    explanation: 'target="_blank" instructs the browser to open the linked document in a new window or tab.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which global attribute allows you to add custom data to an element?',
    options: ['data-*', 'custom-*', 'info-*', 'metadata-*'],
    answer: 0,
    explanation: 'The data-* attributes are used to store custom data private to the page or application. For example, data-user-id="123".'
  },
  {
    category: 'Tags & Attributes',
    question: 'What is the purpose of the `alt` attribute in an `<img>` tag?',
    options: [
      'To provide alternative text for an image if it cannot be displayed.',
      'To define the image title.',
      'To set the image alignment.',
      'To specify the image source URL.'
    ],
    answer: 0,
    explanation: 'The `alt` attribute provides alternative information for an image if a user cannot view it or uses a screen reader.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute is used to provide a unique identifier for an element?',
    options: ['id', 'class', 'name', 'unique'],
    answer: 0,
    explanation: 'The `id` attribute specifies a unique id for an HTML element. The value must be unique within the document.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute can be used with `<a>` to specify the relationship between the current and linked document?',
    options: ['rel', 'href', 'type', 'target'],
    answer: 0,
    explanation: 'The `rel` attribute specifies the relationship. For example, `rel="nofollow"` or `rel="noopener noreferrer"`.'
  },
  {
    category: 'Tags & Attributes',
    question: 'What is the difference between class and id attributes?',
    options: [
      'class can be used multiple times, id must be unique',
      'id can be used multiple times, class must be unique',
      'There is no difference',
      'class is for CSS, id is for JavaScript'
    ],
    answer: 0,
    explanation: 'The id attribute must be unique in a document, while class can be applied to multiple elements.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute is used to specify the character encoding of an HTML document?',
    options: ['charset', 'encoding', 'type', 'format'],
    answer: 0,
    explanation: 'The charset attribute in <meta charset="UTF-8"> specifies character encoding.'
  },
  {
    category: 'Tags & Attributes',
    question: 'What does the contenteditable attribute do?',
    options: [
      'Makes an element editable by the user',
      'Hides the element content',
      'Makes the element read-only',
      'Changes the element color'
    ],
    answer: 0,
    explanation: 'contenteditable="true" makes an HTML element editable by the user in the browser.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute is used to specify tooltip text for an element?',
    options: ['title', 'tooltip', 'hint', 'help'],
    answer: 0,
    explanation: 'The title attribute provides additional information about an element, shown as a tooltip on hover.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute makes an element draggable?',
    options: ['draggable="true"', 'drag="true"', 'movable="true"', 'dragable="true"'],
    answer: 0,
    explanation: 'The draggable attribute set to "true" makes an element draggable using HTML5 drag and drop API.'
  },
  {
    category: 'Tags & Attributes',
    question: 'What does the hidden attribute do?',
    options: [
      'Hides the element from display',
      'Makes the element transparent',
      'Removes the element from DOM',
      'Makes the element read-only'
    ],
    answer: 0,
    explanation: 'The hidden attribute hides an element from view, equivalent to CSS display: none.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute specifies the MIME type of a linked resource?',
    options: ['type', 'mime', 'format', 'content-type'],
    answer: 0,
    explanation: 'The type attribute specifies the MIME type of the linked resource, like type="text/css" for stylesheets.'
  },
  {
    category: 'Tags & Attributes',
    question: 'What is the purpose of the spellcheck attribute?',
    options: [
      'Enables or disables spell checking for an element',
      'Checks grammar in text',
      'Validates form input',
      'Counts words in text'
    ],
    answer: 0,
    explanation: 'spellcheck="true/false" controls whether the browser should check spelling in editable content.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute is used to specify keyboard shortcuts for elements?',
    options: ['accesskey', 'shortcut', 'hotkey', 'key'],
    answer: 0,
    explanation: 'The accesskey attribute specifies a keyboard shortcut to activate or focus an element.'
  },
  {
    category: 'Tags & Attributes',
    question: 'What does the translate attribute control?',
    options: [
      'Whether element content should be translated',
      'Language of the element',
      'Text direction',
      'Character encoding'
    ],
    answer: 0,
    explanation: 'translate="yes/no" indicates whether the element content should be translated by translation services.'
  },
  {
    category: 'Tags & Attributes',
    question: 'Which attribute specifies the direction of text?',
    options: ['dir', 'direction', 'text-dir', 'orientation'],
    answer: 0,
    explanation: 'The dir attribute specifies text direction: "ltr" (left-to-right) or "rtl" (right-to-left).'
  },

  // Forms & Input (Expanded)
  {
    category: 'Forms & Input',
    question: 'Which tag is used to create a multi-line text input control?',
    options: ['<textarea>', '<input type="textarea">', '<input type="multiline">', '<text>'],
    answer: 0,
    explanation: 'The <textarea> tag defines a multi-line text input control.'
  },
  {
    category: 'Forms & Input',
    question: 'To collect emails, which <input> type is best?',
    options: ['text', 'email', 'url', 'password'],
    answer: 1,
    explanation: 'The `type="email"` provides automatic client-side validation for email format.'
  },
  {
    category: 'Forms & Input',
    question: 'What does the `method` attribute in a `<form>` tag specify?',
    options: [
      'The HTTP method (GET or POST) for submitting the form.',
      'The URL to send the form data to.',
      'The character encoding for the form data.',
      'The validation method for form inputs.'
    ],
    answer: 0,
    explanation: 'The `method` attribute specifies how to send form-data. It can be "GET" or "POST".'
  },
  {
    category: 'Forms & Input',
    question: 'Which input type is used for selecting a date in HTML5?',
    options: ['datetime', 'date', 'calendar', 'time'],
    answer: 1,
    explanation: 'The `type="date"` input provides a date picker interface in supporting browsers.'
  },
  {
    category: 'Forms & Input',
    question: 'Which attribute provides a hint to the user of what can be entered in an input field?',
    options: ['placeholder', 'value', 'title', 'hint'],
    answer: 0,
    explanation: 'The `placeholder` attribute shows a hint describing the expected input value.'
  },
  {
    category: 'Forms & Input',
    question: 'What is the purpose of the <label> element?',
    options: [
      'To define a label for form elements',
      'To create a text field',
      'To submit a form',
      'To validate form data'
    ],
    answer: 0,
    explanation: 'The <label> element defines a label for form elements and improves accessibility.'
  },
  {
    category: 'Forms & Input',
    question: 'Which attribute makes an input field required?',
    options: ['required', 'mandatory', 'needed', 'must'],
    answer: 0,
    explanation: 'The required attribute specifies that an input field must be filled before submitting.'
  },
  {
    category: 'Forms & Input',
    question: 'What does the autocomplete attribute do?',
    options: [
      'Controls whether the browser should automatically complete the input',
      'Automatically submits the form',
      'Validates the input format',
      'Encrypts the input data'
    ],
    answer: 0,
    explanation: 'autocomplete controls whether browsers should automatically fill in values based on previous entries.'
  },
  {
    category: 'Forms & Input',
    question: 'Which input type creates a slider control?',
    options: ['slider', 'range', 'scale', 'bar'],
    answer: 1,
    explanation: 'type="range" creates a slider control for selecting a numeric value within a range.'
  },
  {
    category: 'Forms & Input',
    question: 'What is the purpose of the <fieldset> element?',
    options: [
      'To group related form elements together',
      'To create a text area',
      'To validate form data',
      'To style form elements'
    ],
    answer: 0,
    explanation: '<fieldset> groups related form elements together, often with a <legend> element for the group title.'
  },
  {
    category: 'Forms & Input',
    question: 'Which input type is used for color selection?',
    options: ['color', 'rgb', 'hex', 'picker'],
    answer: 0,
    explanation: 'type="color" provides a color picker interface in supporting browsers.'
  },
  {
    category: 'Forms & Input',
    question: 'What is the difference between GET and POST methods?',
    options: [
      'GET appends data to URL, POST sends data in request body',
      'GET is faster than POST',
      'POST is more secure than GET',
      'Both a and c are correct'
    ],
    answer: 3,
    explanation: 'GET appends form data to the URL (visible and limited), while POST sends data in the request body (more secure and can handle larger data).'
  },
  {
    category: 'Forms & Input',
    question: 'Which attribute specifies the maximum number of characters for an input?',
    options: ['maxlength', 'max', 'limit', 'size'],
    answer: 0,
    explanation: 'maxlength attribute limits the number of characters that can be entered in an input field.'
  },
  {
    category: 'Forms & Input',
    question: 'What does the pattern attribute do in input elements?',
    options: [
      'Specifies a regular expression for validation',
      'Sets the visual pattern',
      'Defines input format',
      'Creates a template'
    ],
    answer: 0,
    explanation: 'The pattern attribute specifies a regular expression that the input value must match for validation.'
  },
  {
    category: 'Forms & Input',
    question: 'Which input type is used for uploading files?',
    options: ['file', 'upload', 'attach', 'document'],
    answer: 0,
    explanation: 'type="file" creates a file upload control allowing users to select files from their device.'
  },
  {
    category: 'Forms & Input',
    question: 'What is the purpose of the <datalist> element?',
    options: [
      'Provides predefined options for input elements',
      'Creates a dropdown list',
      'Stores form data',
      'Validates input data'
    ],
    answer: 0,
    explanation: '<datalist> provides a list of predefined options for <input> elements, creating an autocomplete feature.'
  },
  {
    category: 'Forms & Input',
    question: 'Which attribute specifies the minimum value for numeric inputs?',
    options: ['min', 'minimum', 'minval', 'lower'],
    answer: 0,
    explanation: 'The min attribute specifies the minimum value for number, range, date, and time inputs.'
  },
  {
    category: 'Forms & Input',
    question: 'What does the step attribute control in numeric inputs?',
    options: [
      'The increment/decrement step value',
      'The number of steps to validate',
      'The step-by-step guide',
      'The stepping animation'
    ],
    answer: 0,
    explanation: 'The step attribute specifies the legal number intervals for number and range inputs.'
  },
  {
    category: 'Forms & Input',
    question: 'Which form attribute prevents form validation?',
    options: ['novalidate', 'no-validation', 'validate="false"', 'skip-validation'],
    answer: 0,
    explanation: 'The novalidate attribute on a form prevents client-side validation when the form is submitted.'
  },
  {
    category: 'Forms & Input',
    question: 'What is the purpose of the enctype attribute in forms?',
    options: [
      'Specifies how form data should be encoded',
      'Sets the encryption type',
      'Defines the content type',
      'Sets the form encoding'
    ],
    answer: 0,
    explanation: 'enctype specifies how form data should be encoded when submitting. Common values include "application/x-www-form-urlencoded" and "multipart/form-data".'
  },

  // Lists & Tables (Expanded)
  {
    category: 'Lists & Tables',
    question: 'Ordered lists use:',
    options: ['<ul>', '<ol>', '<li>', '<list>'],
    answer: 1,
    explanation: 'Ordered lists are created with the <ol> tag, with each item using <li>.'
  },
  {
    category: 'Lists & Tables',
    question: 'How do you create a description list?',
    options: [
      '<dl>, <dt>, <dd>',
      '<list>, <item>, <desc>',
      '<ul>, <li>, <p>',
      '<ol>, <dt>, <dd>'
    ],
    answer: 0,
    explanation: 'A description list uses <dl> with <dt> (term) and <dd> (description) elements.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which tag defines a table header cell?',
    options: ['<th>', '<td>', '<thead>', '<tr>'],
    answer: 0,
    explanation: 'The <th> tag creates header cells in tables, typically displayed as bold and centered.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which attribute merges two or more columns in a table?',
    options: ['colspan', 'rowspan', 'mergerows', 'mergecols'],
    answer: 0,
    explanation: 'The `colspan` attribute specifies how many columns a cell should span.'
  },
  {
    category: 'Lists & Tables',
    question: 'What is the correct structure for an HTML table?',
    options: [
      '<table><tr><td>Cell</td></tr></table>',
      '<table><row><cell>Cell</cell></row></table>',
      '<table><column><data>Cell</data></column></table>',
      '<table><tbody><cell>Cell</cell></tbody></table>'
    ],
    answer: 0,
    explanation: 'HTML tables use <table>, <tr> (table row), and <td> (table data) elements.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which element is used to group table header content?',
    options: ['<thead>', '<header>', '<th>', '<top>'],
    answer: 0,
    explanation: '<thead> groups header content in a table, used with <tbody> and <tfoot>.'
  },
  {
    category: 'Lists & Tables',
    question: 'What does the rowspan attribute do?',
    options: [
      'Merges cells vertically across multiple rows',
      'Merges cells horizontally across multiple columns',
      'Sets the height of a row',
      'Sets the width of a row'
    ],
    answer: 0,
    explanation: 'rowspan merges table cells vertically across the specified number of rows.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which element provides a caption for a table?',
    options: ['<caption>', '<title>', '<header>', '<label>'],
    answer: 0,
    explanation: '<caption> provides a title or caption for a table, placed immediately after <table>.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which attribute changes the numbering type in ordered lists?',
    options: ['type', 'style', 'format', 'numbering'],
    answer: 0,
    explanation: 'The type attribute can be set to "1" (numbers), "A" (uppercase letters), "a" (lowercase letters), "I" (uppercase Roman), or "i" (lowercase Roman).'
  },
  {
    category: 'Lists & Tables',
    question: 'What does the start attribute do in ordered lists?',
    options: [
      'Specifies the starting number for the list',
      'Starts the list automatically',
      'Defines the list beginning',
      'Sets the first item'
    ],
    answer: 0,
    explanation: 'The start attribute in <ol> specifies the starting number for the ordered list.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which element groups table body content?',
    options: ['<tbody>', '<body>', '<content>', '<main>'],
    answer: 0,
    explanation: '<tbody> groups the body content in a table, separate from header and footer.'
  },
  {
    category: 'Lists & Tables',
    question: 'What is the purpose of <tfoot> element?',
    options: [
      'Groups footer content in a table',
      'Creates table footnotes',
      'Defines table bottom border',
      'Sets table height'
    ],
    answer: 0,
    explanation: '<tfoot> groups footer content in a table, typically containing summary information.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which attribute associates a table cell with header cells?',
    options: ['headers', 'scope', 'id', 'for'],
    answer: 0,
    explanation: 'The headers attribute in <td> references the id values of header cells, improving accessibility.'
  },
  {
    category: 'Lists & Tables',
    question: 'What does the scope attribute do in table headers?',
    options: [
      'Defines which cells the header applies to',
      'Sets the header width',
      'Controls header visibility',
      'Defines header style'
    ],
    answer: 0,
    explanation: 'The scope attribute in <th> specifies whether the header applies to a column, row, or group of columns/rows.'
  },
  {
    category: 'Lists & Tables',
    question: 'Which CSS property equivalent does the reversed attribute provide for lists?',
    options: [
      'Numbers the list in reverse order',
      'Reverses the list direction',
      'Reverses text direction',
      'Reverses list items'
    ],
    answer: 0,
    explanation: 'The reversed attribute in <ol> makes the list count down instead of up.'
  },

  // Media & Multimedia (Expanded)
  // Media & Multimedia (Completed)
  {
    category: 'Media & Multimedia',
    question: 'Which element is used for scalable vector graphics?',
    options: ['<svg>', '<vector>', '<graphic>', '<canvas>'],
    answer: 0,
    explanation: '<svg> is used to embed scalable vector graphics directly in HTML.'
  },
  {
    category: 'Media & Multimedia',
    question: 'What does the loop attribute do in audio/video elements?',
    options: [
      'Makes the media play repeatedly',
      'Creates a loop in the audio',
      'Loops through different sources',
      'Creates a playback loop control'
    ],
    answer: 0,
    explanation: 'The loop attribute makes audio/video restart automatically when it reaches the end.'
  },
  {
    category: 'Media & Multimedia',
    question: 'Which attribute specifies that the video should be muted by default?',
    options: ['muted', 'silent', 'volume="0"', 'sound="off"'],
    answer: 0,
    explanation: 'The muted attribute specifies that the audio output should be muted by default.'
  },
  {
    category: 'Media & Multimedia',
    question: 'What is the purpose of the poster attribute in video elements?',
    options: [
      'Specifies an image to be shown while video is downloading',
      'Sets the video title',
      'Creates a video thumbnail',
      'Adds a watermark to the video'
    ],
    answer: 0,
    explanation: 'The poster attribute specifies an image to show before the video starts playing or while downloading.'
  },
  {
    category: 'Media & Multimedia',
    question: 'Which element is used for drawing graphics via scripting?',
    options: ['<canvas>', '<draw>', '<graphics>', '<svg>'],
    answer: 0,
    explanation: '<canvas> provides a drawable region for graphics via JavaScript scripting.'
  },
  {
    category: 'Media & Multimedia',
    question: 'What does the preload attribute control in media elements?',
    options: [
      'How much of the media should be loaded when the page loads',
      'The loading speed of media',
      'Whether to show loading animation',
      'The media quality'
    ],
    answer: 0,
    explanation: 'preload can be "none", "metadata", or "auto" controlling how much media loads initially.'
  },
  {
    category: 'Media & Multimedia',
    question: 'Which tag is used to provide subtitles for videos?',
    options: ['<track>', '<subtitle>', '<caption>', '<text>'],
    answer: 0,
    explanation: '<track> provides text tracks for media elements like subtitles, captions, and descriptions.'
  },
  {
    category: 'Media & Multimedia',
    question: 'What is the difference between <embed> and <object> tags?',
    options: [
      '<object> is more flexible and standardized, <embed> is simpler',
      '<embed> is newer than <object>',
      '<object> only works with videos',
      'There is no difference'
    ],
    answer: 0,
    explanation: '<object> is the standard way to embed external content with fallback options, while <embed> is simpler but less flexible.'
  },
  {
    category: 'Media & Multimedia',
    question: 'Which attribute in <iframe> prevents the frame from accessing the parent window?',
    options: ['sandbox', 'secure', 'isolated', 'restrict'],
    answer: 0,
    explanation: 'The sandbox attribute enables security restrictions on iframe content.'
  },
  {
    category: 'Media & Multimedia',
    question: 'What does the crossorigin attribute do in media elements?',
    options: [
      'Controls CORS settings for cross-origin media requests',
      'Allows media from different domains',
      'Sets cross-platform compatibility',
      'Enables cross-browser support'
    ],
    answer: 0,
    explanation: 'crossorigin controls how cross-origin requests are handled for media elements.'
  },

  // HTML5 Semantic Elements
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which HTML5 element represents a complete or self-contained composition?',
    options: ['<article>', '<section>', '<div>', '<content>'],
    answer: 0,
    explanation: '<article> represents a standalone piece of content that could be distributed independently.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'What is the purpose of the <nav> element?',
    options: [
      'To define navigation links',
      'To create a navigation bar',
      'To style navigation elements',
      'To make links clickable'
    ],
    answer: 0,
    explanation: '<nav> represents a section of navigation links, either within the current document or to other pages.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which element represents the header of a document or section?',
    options: ['<header>', '<head>', '<top>', '<title>'],
    answer: 0,
    explanation: '<header> represents introductory content, typically containing heading elements, logo, or navigation.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'What does the <aside> element represent?',
    options: [
      'Content that is tangentially related to the main content',
      'Content that should be hidden',
      'Side navigation menu',
      'Advertisement space'
    ],
    answer: 0,
    explanation: '<aside> represents content that is indirectly related to the main content, like sidebars or call-out boxes.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which element defines the main content of a document?',
    options: ['<main>', '<content>', '<body>', '<primary>'],
    answer: 0,
    explanation: '<main> represents the dominant content of the document, excluding headers, footers, and sidebars.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'What is the difference between <section> and <div>?',
    options: [
      '<section> has semantic meaning, <div> is generic',
      '<div> has semantic meaning, <section> is generic',
      'There is no difference',
      '<section> is for CSS, <div> is for content'
    ],
    answer: 0,
    explanation: '<section> represents a thematic grouping of content with semantic meaning, while <div> is a generic container.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which element represents a footer for its nearest sectioning content?',
    options: ['<footer>', '<bottom>', '<end>', '<foot>'],
    answer: 0,
    explanation: '<footer> represents a footer for its nearest sectioning content or sectioning root element.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'What does the <figure> element represent?',
    options: [
      'Self-contained content like images, diagrams, or code listings',
      'Mathematical figures only',
      'Statistical data',
      'Numeric values'
    ],
    answer: 0,
    explanation: '<figure> represents self-contained content, often with a caption defined by <figcaption>.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which element provides a caption for a <figure>?',
    options: ['<figcaption>', '<caption>', '<legend>', '<title>'],
    answer: 0,
    explanation: '<figcaption> represents a caption or legend for a figure.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'What is the purpose of the <time> element?',
    options: [
      'To represent a specific period in time',
      'To display the current time',
      'To create a timer',
      'To set time limits'
    ],
    answer: 0,
    explanation: '<time> represents a specific period in time, with optional datetime attribute for machine-readable format.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which element represents a disclosure widget?',
    options: ['<details>', '<summary>', '<expand>', '<collapse>'],
    answer: 0,
    explanation: '<details> creates a disclosure widget where information is visible only when toggled to "open" state.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'What does the <mark> element represent?',
    options: [
      'Text that is highlighted for reference purposes',
      'Important text',
      'Marked for deletion',
      'Bookmark text'
    ],
    answer: 0,
    explanation: '<mark> represents text highlighted for reference purposes, due to its relevance in another context.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which element represents the progress of a task?',
    options: ['<progress>', '<meter>', '<status>', '<completion>'],
    answer: 0,
    explanation: '<progress> represents the progress of a task, like loading or form completion.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'What is the purpose of the <meter> element?',
    options: [
      'To display a scalar measurement within a known range',
      'To measure time',
      'To create a measuring tool',
      'To display metrics'
    ],
    answer: 0,
    explanation: '<meter> represents a scalar measurement within a known range, like disk usage or temperature.'
  },
  {
    category: 'HTML5 Semantic Elements',
    question: 'Which attribute is required for the <progress> element to show determinate progress?',
    options: ['value', 'max', 'min', 'step'],
    answer: 0,
    explanation: 'The value attribute specifies how much of the task has been completed. Without it, progress is indeterminate.'
  },

  // Text Formatting & Typography
{
  category: 'Text Formatting & Typography',
  question: 'Which element makes text bold without adding semantic importance?',
  options: ['<b>', '<strong>', '<bold>', '<weight>'],
  answer: 0,
  explanation: '<b> makes text bold for stylistic purposes, while <strong> indicates importance.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What is the difference between <strong> and <b> tags?',
  options: [
    '<strong> has semantic meaning (importance), <b> is purely visual',
    '<b> has semantic meaning, <strong> is visual',
    'There is no difference',
    '<strong> is deprecated'
  ],
  answer: 0,
  explanation: '<strong> indicates semantic importance, <b> is for stylistic bold text without semantic meaning.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element represents emphasized text?',
  options: ['<em>', '<i>', '<emphasis>', '<italic>'],
  answer: 0,
  explanation: '<em> represents emphasized text with semantic meaning, while <i> is for stylistic italics.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What does the <del> element represent?',
  options: [
    'Text that has been deleted from the document',
    'Text to be deleted later',
    'Temporary text removal',
    'Hidden text'
  ],
  answer: 0,
  explanation: '<del> represents text that has been deleted/removed, often shown with strikethrough.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element represents inserted/added text?',
  options: ['<ins>', '<add>', '<new>', '<insert>'],
  answer: 0,
  explanation: '<ins> represents text that has been added to the document, often shown underlined.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What is the purpose of the <code> element?',
  options: [
    'To display inline code snippets',
    'To execute code',
    'To hide code from users',
    'To comment code'
  ],
  answer: 0,
  explanation: '<code> represents inline code fragments, typically displayed in monospace font.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element is used for preformatted text blocks?',
  options: ['<pre>', '<code>', '<format>', '<text>'],
  answer: 0,
  explanation: '<pre> preserves whitespace and line breaks, displaying text exactly as written.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What does the <kbd> element represent?',
  options: [
    'Keyboard input or user input',
    'Keyboard shortcuts',
    'Key definitions',
    'Keyboard layouts'
  ],
  answer: 0,
  explanation: '<kbd> represents user input, typically keyboard input, shown in monospace font.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element represents sample output from a program?',
  options: ['<samp>', '<output>', '<result>', '<sample>'],
  answer: 0,
  explanation: '<samp> represents sample output from a computer program, typically in monospace font.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What is the purpose of the <var> element?',
  options: [
    'To represent a variable in mathematical expressions or programming',
    'To create JavaScript variables',
    'To store variable data',
    'To define CSS variables'
  ],
  answer: 0,
  explanation: '<var> represents variables in mathematical expressions or programming contexts.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element creates superscript text?',
  options: ['<sup>', '<super>', '<high>', '<top>'],
  answer: 0,
  explanation: '<sup> creates superscript text, positioned above the baseline.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element creates subscript text?',
  options: ['<sub>', '<subscript>', '<low>', '<bottom>'],
  answer: 0,
  explanation: '<sub> creates subscript text, positioned below the baseline.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What does the <small> element represent?',
  options: [
    'Side comments like fine print or legal text',
    'Small font size only',
    'Unimportant text',
    'Text to be minimized'
  ],
  answer: 0,
  explanation: '<small> represents side comments like fine print, disclaimers, or legal text.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element represents an abbreviation or acronym?',
  options: ['<abbr>', '<acronym>', '<short>', '<abbreviation>'],
  answer: 0,
  explanation: '<abbr> represents abbreviations or acronyms, often with title attribute for full form.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What is the purpose of the <cite> element?',
  options: [
    'To reference the title of a creative work',
    'To cite a person',
    'To create citations',
    'To quote text'
  ],
  answer: 0,
  explanation: '<cite> represents the title of a creative work like books, articles, or movies.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element represents a short inline quotation?',
  options: ['<q>', '<quote>', '<inline-quote>', '<citation>'],
  answer: 0,
  explanation: '<q> represents short inline quotations, browsers typically add quotation marks.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What does the <blockquote> element represent?',
  options: [
    'A block-level quotation from another source',
    'A quote block for styling',
    'Important quotes only',
    'Multiple line quotes'
  ],
  answer: 0,
  explanation: '<blockquote> represents extended quotations, typically from external sources.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which attribute specifies the source URL for a <blockquote>?',
  options: ['cite', 'src', 'source', 'url'],
  answer: 0,
  explanation: 'The cite attribute provides the URL of the source of the quotation.'
},
{
  category: 'Text Formatting & Typography',
  question: 'What is the purpose of the <dfn> element?',
  options: [
    'To mark the defining instance of a term',
    'To create definitions',
    'To define functions',
    'To mark important definitions'
  ],
  answer: 0,
  explanation: '<dfn> represents the defining instance of a term in a document.'
},
{
  category: 'Text Formatting & Typography',
  question: 'Which element represents text in an alternate voice or mood?',
  options: ['<i>', '<em>', '<alt>', '<voice>'],
  answer: 0,
  explanation: '<i> represents text in alternate voice/mood, like foreign words, technical terms, or thoughts.'
},

// Links & Navigation
{
  category: 'Links & Navigation',
  question: 'Which attribute creates an anchor point within a page?',
  options: ['id', 'name', 'anchor', 'bookmark'],
  answer: 0,
  explanation: 'The id attribute creates anchor points that can be linked to with href="#id".'
},
{
  category: 'Links & Navigation',
  question: 'How do you create a link to an email address?',
  options: [
    '<a href="mailto:email@example.com">',
    '<a href="email:email@example.com">',
    '<a href="mail:email@example.com">',
    '<email>email@example.com</email>'
  ],
  answer: 0,
  explanation: 'mailto: protocol creates email links that open the default email client.'
},
{
  category: 'Links & Navigation',
  question: 'Which target value opens a link in the parent frame?',
  options: ['_parent', '_top', '_self', '_blank'],
  answer: 0,
  explanation: 'target="_parent" opens the link in the parent frame of the current frame.'
},
{
  category: 'Links & Navigation',
  question: 'What does target="_top" do?',
  options: [
    'Opens link in the full window, breaking out of all frames',
    'Opens link at the top of the page',
    'Opens link in the topmost frame',
    'Scrolls to top of page'
  ],
  answer: 0,
  explanation: 'target="_top" loads the link in the full window, removing all frames.'
},
{
  category: 'Links & Navigation',
  question: 'Which rel value prevents the browser from sending referrer information?',
  options: ['noreferrer', 'nofollow', 'noopener', 'private'],
  answer: 0,
  explanation: 'rel="noreferrer" prevents the browser from sending referrer information to the target site.'
},
{
  category: 'Links & Navigation',
  question: 'What does rel="noopener" do?',
  options: [
    'Prevents the new page from accessing the window.opener property',
    'Prevents the link from opening',
    'Opens without a new window',
    'Blocks popup windows'
  ],
  answer: 0,
  explanation: 'rel="noopener" prevents the newly opened page from accessing the original page via window.opener.'
},
{
  category: 'Links & Navigation',
  question: 'Which protocol is used for telephone links?',
  options: ['tel:', 'phone:', 'call:', 'telephone:'],
  answer: 0,
  explanation: 'tel: protocol creates telephone links: <a href="tel:+1234567890">.'
},
{
  category: 'Links & Navigation',
  question: 'How do you create a link to send an SMS?',
  options: ['sms:', 'text:', 'message:', 'msg:'],
  answer: 0,
  explanation: 'sms: protocol creates SMS links: <a href="sms:+1234567890">.'
},
{
  category: 'Links & Navigation',
  question: 'What does the download attribute do in anchor tags?',
  options: [
    'Forces the browser to download the linked resource',
    'Downloads the current page',
    'Enables download functionality',
    'Specifies download location'
  ],
  answer: 0,
  explanation: 'The download attribute prompts the user to save the linked resource instead of navigating to it.'
},
{
  category: 'Links & Navigation',
  question: 'Which attribute specifies the MIME type of the linked document?',
  options: ['type', 'mime', 'content-type', 'format'],
  answer: 0,
  explanation: 'The type attribute specifies the MIME type of the linked resource.'
},
{
  category: 'Links & Navigation',
  question: 'What is the purpose of rel="bookmark"?',
  options: [
    'Indicates the link is a permalink to the nearest article',
    'Creates a browser bookmark',
    'Marks important links',
    'Saves the link for later'
  ],
  answer: 0,
  explanation: 'rel="bookmark" indicates that the hyperlink is a permalink for the nearest ancestor article.'
},
{
  category: 'Links & Navigation',
  question: 'Which attribute specifies the language of the linked document?',
  options: ['hreflang', 'lang', 'language', 'locale'],
  answer: 0,
  explanation: 'hreflang specifies the language of the linked document, useful for SEO and accessibility.'
},
{
  category: 'Links & Navigation',
  question: 'What does rel="alternate" indicate?',
  options: [
    'An alternative representation of the current document',
    'An alternative link destination',
    'A backup link',
    'An optional link'
  ],
  answer: 0,
  explanation: 'rel="alternate" indicates alternative representations like RSS feeds or translations.'
},
{
  category: 'Links & Navigation',
  question: 'How do you create a link that opens a file dialog?',
  options: [
    'Use download attribute with empty value',
    'Use file: protocol',
    'Use open: protocol',
    'Use dialog: protocol'
  ],
  answer: 0,
  explanation: 'download="" or download attribute without value opens a file save dialog.'
},
{
  category: 'Links & Navigation',
  question: 'Which rel value indicates a link to the next document in a series?',
  options: ['next', 'forward', 'continue', 'following'],
  answer: 0,
  explanation: 'rel="next" indicates the next document in a sequence, useful for pagination.'
},

// Meta Tags & SEO
{
  category: 'Meta Tags & SEO',
  question: 'Which meta tag sets the character encoding for the document?',
  options: [
    '<meta charset="UTF-8">',
    '<meta encoding="UTF-8">',
    '<meta character-set="UTF-8">',
    '<meta content-type="UTF-8">'
  ],
  answer: 0,
  explanation: '<meta charset="UTF-8"> declares the character encoding, should be within first 1024 bytes.'
},
{
  category: 'Meta Tags & SEO',
  question: 'What does the viewport meta tag control?',
  options: [
    'How the page is displayed on mobile devices',
    'The visible area of the page',
    'Screen resolution settings',
    'Browser window size'
  ],
  answer: 0,
  explanation: 'Viewport meta tag controls layout on mobile browsers: <meta name="viewport" content="width=device-width, initial-scale=1">.'
},
{
  category: 'Meta Tags & SEO',
  question: 'Which meta tag provides a description for search engines?',
  options: [
    '<meta name="description" content="...">',
    '<meta name="summary" content="...">',
    '<meta name="about" content="...">',
    '<meta name="info" content="...">'
  ],
  answer: 0,
  explanation: 'Meta description provides a brief description of the page for search engine results.'
},
{
  category: 'Meta Tags & SEO',
  question: 'What is the recommended length for meta descriptions?',
  options: ['150-160 characters', '50-60 characters', '200-250 characters', '300+ characters'],
  answer: 0,
  explanation: 'Meta descriptions should be 150-160 characters to display fully in search results.'
},
{
  category: 'Meta Tags & SEO',
  question: 'Which meta tag specifies keywords for search engines?',
  options: [
    '<meta name="keywords" content="...">',
    '<meta name="tags" content="...">',
    '<meta name="search" content="...">',
    '<meta name="topics" content="...">'
  ],
  answer: 0,
  explanation: 'Meta keywords tag specifies keywords, though most search engines now ignore it due to spam.'
},
{
  category: 'Meta Tags & SEO',
  question: 'What does the robots meta tag control?',
  options: [
    'How search engine crawlers index the page',
    'Robot traffic to the website',
    'Automated scripts on the page',
    'Bot protection settings'
  ],
  answer: 0,
  explanation: 'Robots meta tag controls search engine crawler behavior: index/noindex, follow/nofollow.'
},
{
  category: 'Meta Tags & SEO',
  question: 'Which value prevents search engines from indexing a page?',
  options: ['noindex', 'nofollow', 'nocrawl', 'nosearch'],
  answer: 0,
  explanation: '<meta name="robots" content="noindex"> prevents search engines from indexing the page.'
},
{
  category: 'Meta Tags & SEO',
  question: 'What does the canonical link tag do?',
  options: [
    'Specifies the preferred URL for duplicate content',
    'Creates a canonical format for the page',
    'Links to the main website',
    'Defines the page hierarchy'
  ],
  answer: 0,
  explanation: '<link rel="canonical" href="..."> helps prevent duplicate content issues in SEO.'
},
{
  category: 'Meta Tags & SEO',
  question: 'Which meta tag specifies the document author?',
  options: [
    '<meta name="author" content="...">',
    '<meta name="creator" content="...">',
    '<meta name="writer" content="...">',
    '<meta name="by" content="...">'
  ],
  answer: 0,
  explanation: 'Meta author tag specifies the author of the document.'
},
{
  category: 'Meta Tags & SEO',
  question: 'What is the purpose of Open Graph meta tags?',
  options: [
    'Control how content appears when shared on social media',
    'Create open source connections',
    'Enable graph databases',
    'Open external links'
  ],
  answer: 0,
  explanation: 'Open Graph tags (og:title, og:description, og:image) control social media sharing appearance.'
},
{
  category: 'Meta Tags & SEO',
  question: 'Which property sets the Open Graph title?',
  options: ['og:title', 'og:name', 'og:heading', 'og:subject'],
  answer: 0,
  explanation: '<meta property="og:title" content="..."> sets the title for social media sharing.'
},
{
  category: 'Meta Tags & SEO',
  question: 'What does the http-equiv attribute do in meta tags?',
  options: [
    'Provides HTTP header information',
    'Enables HTTP connections',
    'Sets HTTP version',
    'Creates HTTP redirects'
  ],
  answer: 0,
  explanation: 'http-equiv provides HTTP header information like refresh, content-type, or cache-control.'
},
{
  category: 'Meta Tags & SEO',
  question: 'How do you redirect a page using meta tags?',
  options: [
    '<meta http-equiv="refresh" content="0;url=...">',
    '<meta name="redirect" content="...">',
    '<meta http-equiv="location" content="...">',
    '<meta name="goto" content="...">'
  ],
  answer: 0,
  explanation: 'Meta refresh can redirect after specified seconds: content="5;url=newpage.html".'
},
{
  category: 'Meta Tags & SEO',
  question: 'Which Twitter Card meta tag sets the card type?',
  options: ['twitter:card', 'twitter:type', 'twitter:format', 'twitter:style'],
  answer: 0,
  explanation: '<meta name="twitter:card" content="summary"> sets the Twitter Card type.'
},
{
  category: 'Meta Tags & SEO',
  question: 'What is the purpose of the theme-color meta tag?',
  options: [
    'Sets the browser chrome color on mobile devices',
    'Defines the website color theme',
    'Sets the page background color',
    'Controls color scheme preferences'
  ],
  answer: 0,
  explanation: '<meta name="theme-color" content="#000000"> sets mobile browser chrome color.'
},

  // Accessibility & ARIA
  {
    category: 'Accessibility & ARIA',
    question: 'What does ARIA stand for in web development?',
    options: [
      'Accessible Rich Internet Applications',
      'Advanced Responsive Internet Applications',
      'Automated Rich Internet Access',
      'Accessible Responsive Internet Applications'
    ],
    answer: 0,
    explanation: 'ARIA stands for Accessible Rich Internet Applications, a set of attributes to improve accessibility for users with disabilities.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'Which ARIA attribute is used to describe the current state of a toggle button?',
    options: ['aria-pressed', 'aria-checked', 'aria-expanded', 'aria-state'],
    answer: 0,
    explanation: 'aria-pressed is used to indicate the pressed state of toggle buttons.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'What is the purpose of the alt attribute in images?',
    options: [
      'To provide alternative text for screen readers',
      'To style the image',
      'To add a caption',
      'To link the image'
    ],
    answer: 0,
    explanation: 'The alt attribute provides alternative text for images, which is read by screen readers for visually impaired users.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'Which ARIA attribute is used to label an element with a custom label?',
    options: ['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-namedby'],
    answer: 0,
    explanation: 'aria-label provides a string label for an element, used by assistive technologies.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'What does the tabindex attribute control?',
    options: [
      'The order in which elements receive keyboard focus',
      'The tab size in textareas',
      'The indentation of elements',
      'The visibility of elements'
    ],
    answer: 0,
    explanation: 'tabindex controls the order in which elements are focused when using the Tab key.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'Which ARIA attribute is used to indicate that an element is currently selected?',
    options: ['aria-selected', 'aria-checked', 'aria-active', 'aria-pressed'],
    answer: 0,
    explanation: 'aria-selected is used to indicate the selected state of elements like tabs or list items.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'What is the main purpose of using semantic HTML elements for accessibility?',
    options: [
      'To provide meaning and structure for assistive technologies',
      'To improve SEO only',
      'To add more CSS classes',
      'To reduce page size'
    ],
    answer: 0,
    explanation: 'Semantic HTML elements provide meaning and structure, making it easier for assistive technologies to interpret content.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'Which ARIA attribute is used to provide a description for an element?',
    options: ['aria-describedby', 'aria-label', 'aria-description', 'aria-details'],
    answer: 0,
    explanation: 'aria-describedby references another element that provides a description for the current element.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'What is the recommended minimum contrast ratio for normal text for accessibility?',
    options: ['4.5:1', '2:1', '3:1', '7:1'],
    answer: 0,
    explanation: 'WCAG recommends a minimum contrast ratio of 4.5:1 for normal text.'
  },
  {
    category: 'Accessibility & ARIA',
    question: 'Which HTML element is best for marking up navigation menus for accessibility?',
    options: ['<nav>', '<div>', '<section>', '<aside>'],
    answer: 0,
    explanation: 'The <nav> element semantically marks up navigation menus, improving accessibility.'
  },

  // HTML APIs & Advanced Features
  {
    category: 'HTML APIs & Advanced Features',
    question: 'Which API allows web pages to store data locally in the user\'s browser?',
    options: ['Web Storage API', 'Fetch API', 'Canvas API', 'WebSocket API'],
    answer: 0,
    explanation: 'The Web Storage API (localStorage and sessionStorage) allows web pages to store data locally.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'What is the purpose of the Geolocation API?',
    options: [
      'To get the geographical position of the user',
      'To draw graphics',
      'To access the camera',
      'To store files'
    ],
    answer: 0,
    explanation: 'The Geolocation API provides access to the user\'s geographical location.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'Which API is used to draw 2D graphics on a web page?',
    options: ['Canvas API', 'WebGL API', 'SVG API', 'Media API'],
    answer: 0,
    explanation: 'The Canvas API is used for drawing 2D graphics via JavaScript.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'What does the Fetch API do?',
    options: [
      'Performs network requests to fetch resources',
      'Fetches local files only',
      'Draws images',
      'Animates elements'
    ],
    answer: 0,
    explanation: 'The Fetch API is used to make network requests similar to XMLHttpRequest but with a modern promise-based interface.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'Which API allows real-time, two-way communication between client and server?',
    options: ['WebSocket API', 'Web Storage API', 'Fetch API', 'Drag and Drop API'],
    answer: 0,
    explanation: 'The WebSocket API enables real-time, two-way communication between client and server.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'What is the purpose of the Drag and Drop API?',
    options: [
      'To enable drag-and-drop functionality in web applications',
      'To store files',
      'To fetch data',
      'To play audio'
    ],
    answer: 0,
    explanation: 'The Drag and Drop API allows elements to be dragged and dropped within and between web pages.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'Which API is used to access and manipulate the clipboard?',
    options: ['Clipboard API', 'Canvas API', 'WebGL API', 'Media API'],
    answer: 0,
    explanation: 'The Clipboard API provides methods to read from and write to the system clipboard.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'What does the Notification API allow web applications to do?',
    options: [
      'Display system notifications to the user',
      'Send emails',
      'Play audio',
      'Store data'
    ],
    answer: 0,
    explanation: 'The Notification API allows web apps to display notifications to the user, even when the page is not active.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'Which API is used for offline web applications?',
    options: ['Service Worker API', 'Fetch API', 'WebSocket API', 'Canvas API'],
    answer: 0,
    explanation: 'The Service Worker API enables offline capabilities by intercepting network requests and caching resources.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'What is the main use of the WebGL API?',
    options: [
      'Rendering interactive 3D and 2D graphics',
      'Storing data',
      'Accessing the camera',
      'Sending notifications'
    ],
    answer: 0,
    explanation: 'WebGL API is used for rendering interactive 3D and 2D graphics within any compatible web browser.'
  },

  // Best Practices & Standards
  {
    category: 'Best Practices & Standards',
    question: 'Why should you always use the <!DOCTYPE html> declaration?',
    options: [
      'To ensure the browser renders the page in standards mode',
      'To add comments',
      'To enable JavaScript',
      'To improve SEO'
    ],
    answer: 0,
    explanation: 'The <!DOCTYPE html> declaration ensures the browser uses standards mode for rendering.'
  },
  {
    category: 'Best Practices & Standards',
    question: 'What is the recommended way to include CSS in HTML for maintainability?',
    options: [
      'External stylesheets',
      'Inline styles',
      'Embedded <style> tags',
      'Using the style attribute on every element'
    ],
    answer: 0,
    explanation: 'External stylesheets are recommended for maintainability and reusability.'
  },
  {
    category: 'Best Practices & Standards',
    question: 'Why should you use semantic HTML elements?',
    options: [
      'To improve accessibility and SEO',
      'To make the page load faster',
      'To add more colors',
      'To reduce file size'
    ],
    answer: 0,
    explanation: 'Semantic HTML improves accessibility, SEO, and code readability.'
  },
  {
    category: 'Best Practices & Standards',
    question: 'What is the best practice for image alt text?',
    options: [
      'Describe the image meaningfully',
      'Leave it empty',
      'Use the file name',
      'Repeat the caption'
    ],
    answer: 0,
    explanation: 'Alt text should meaningfully describe the image for users who cannot see it.'
  },
  {
    category: 'Best Practices & Standards',
    question: 'Why should you avoid using deprecated HTML tags?',
    options: [
      'They may not be supported in modern browsers',
      'They improve performance',
      'They are more secure',
      'They are easier to style'
    ],
    answer: 0,
    explanation: 'Deprecated tags may not be supported and can cause inconsistent behavior across browsers.'
  },
  {
    category: 'Best Practices & Standards',
    question: 'What is the recommended way to structure headings in HTML?',
    options: [
      'Use headings in a logical, hierarchical order',
      'Use <h1> everywhere',
      'Skip heading levels',
      'Use headings for styling only'
    ],
    answer: 0,
    explanation: 'Headings should be used in a logical, hierarchical order for structure and accessibility.'
  },
  {
    category: 'Best Practices & Standards',
    question: 'Why should you use label elements with form controls?',
    options: [
      'To improve accessibility and usability',
      'To add color',
      'To increase page speed',
      'To reduce code size'
    ],
    answer: 0,
    explanation: 'Label elements improve accessibility and make forms easier to use.'
  },
  {
    category: 'Best Practices & Standards',
    question: 'What is the best practice for linking external JavaScript files?',
    options: [
      'Place <script> tags just before </body>',
      'Place <script> tags in <head>',
      'Use inline scripts',
      'Use <script> tags at the top of <body>'
    ],
    answer: 0,
    explanation: 'Placing scripts before </body> allows the page to load content before executing scripts.'
  },

  // Common Mistakes & Debugging
  {
    category: 'Common Mistakes & Debugging',
    question: 'What happens if you forget to close an HTML tag?',
    options: [
      'The browser may auto-close it, but layout issues can occur',
      'The page will not load',
      'The browser will show an error',
      'Nothing will happen'
    ],
    answer: 0,
    explanation: 'Browsers try to auto-close tags, but this can cause layout and rendering issues.'
  },
  {
    category: 'Common Mistakes & Debugging',
    question: 'Which tool is most useful for debugging HTML and CSS issues?',
    options: ['Browser Developer Tools', 'Text Editor', 'FTP Client', 'Terminal'],
    answer: 0,
    explanation: 'Browser Developer Tools allow you to inspect and debug HTML, CSS, and JavaScript.'
  },
  {
    category: 'Common Mistakes & Debugging',
    question: 'What is a common mistake when using the <img> tag?',
    options: [
      'Omitting the alt attribute',
      'Using <img> inside <head>',
      'Using <img> without src',
      'All of the above'
    ],
    answer: 3,
    explanation: 'All these are common mistakes: omitting alt, placing <img> in <head>, or missing src.'
  },
  {
    category: 'Common Mistakes & Debugging',
    question: 'What is the result of using duplicate id attributes in a document?',
    options: [
      'It causes unpredictable behavior and breaks standards',
      'It improves performance',
      'It is required for forms',
      'It has no effect'
    ],
    answer: 0,
    explanation: 'Duplicate ids break standards and can cause unpredictable behavior in scripts and CSS.'
  },
  {
    category: 'Common Mistakes & Debugging',
    question: 'Which tag is often mistakenly used for layout instead of CSS?',
    options: ['<table>', '<div>', '<span>', '<form>'],
    answer: 0,
    explanation: '<table> is often misused for layout, but CSS should be used for page layout.'
  },
  {
    category: 'Common Mistakes & Debugging',
    question: 'What is a common cause of broken links in HTML?',
    options: [
      'Incorrect href or src values',
      'Using <a> without href',
      'Using relative paths incorrectly',
      'All of the above'
    ],
    answer: 3,
    explanation: 'All of these can cause broken links: incorrect href/src, missing href, or bad relative paths.'
  },

  // Performance & Optimization
  {
    category: 'Performance & Optimization',
    question: 'What is the benefit of minifying HTML, CSS, and JavaScript files?',
    options: [
      'Reduces file size and improves load times',
      'Increases security',
      'Improves SEO',
      'Makes code easier to read'
    ],
    answer: 0,
    explanation: 'Minification removes unnecessary characters, reducing file size and improving load times.'
  },
  {
    category: 'Performance & Optimization',
    question: 'Why should you use image formats like WebP or AVIF?',
    options: [
      'They offer better compression and quality',
      'They are easier to edit',
      'They are supported by all browsers',
      'They are vector formats'
    ],
    answer: 0,
    explanation: 'WebP and AVIF offer better compression and quality compared to older formats like JPEG and PNG.'
  },
  {
    category: 'Performance & Optimization',
    question: 'What is lazy loading in the context of images?',
    options: [
      'Loading images only when they are about to enter the viewport',
      'Loading all images at once',
      'Loading images in the background',
      'Loading images from a CDN'
    ],
    answer: 0,
    explanation: 'Lazy loading defers loading images until they are needed, improving performance.'
  },
  {
    category: 'Performance & Optimization',
    question: 'Why is it important to reduce the number of HTTP requests on a web page?',
    options: [
      'To decrease page load time',
      'To improve SEO',
      'To increase accessibility',
      'To reduce code size'
    ],
    answer: 0,
    explanation: 'Fewer HTTP requests mean faster page loads and better performance.'
  },
  {
    category: 'Performance & Optimization',
    question: 'What is the purpose of using a Content Delivery Network (CDN)?',
    options: [
      'To serve content from locations closer to the user',
      'To store backups',
      'To improve SEO',
      'To host databases'
    ],
    answer: 0,
    explanation: 'CDNs serve content from geographically distributed servers, reducing latency and improving speed.'
  },

  // Cross-browser Compatibility
  {
    category: 'Cross-browser Compatibility',
    question: 'What is a common cause of cross-browser issues in HTML?',
    options: [
      'Using non-standard or deprecated features',
      'Using only semantic elements',
      'Using too many comments',
      'Using lowercase tags'
    ],
    answer: 0,
    explanation: 'Non-standard or deprecated features may not be supported in all browsers.'
  },
  {
    category: 'Cross-browser Compatibility',
    question: 'Why should you test your website in multiple browsers?',
    options: [
      'To ensure consistent appearance and functionality',
      'To improve SEO',
      'To reduce file size',
      'To increase server speed'
    ],
    answer: 0,
    explanation: 'Testing in multiple browsers ensures your site works and looks as intended for all users.'
  },
  {
    category: 'Cross-browser Compatibility',
    question: 'What is a feature detection library commonly used for compatibility?',
    options: ['Modernizr', 'jQuery', 'Bootstrap', 'React'],
    answer: 0,
    explanation: 'Modernizr is a popular library for detecting HTML5 and CSS3 features in browsers.'
  },
  {
    category: 'Cross-browser Compatibility',
    question: 'What is a polyfill in web development?',
    options: [
      'A script that adds missing browser support for features',
      'A CSS framework',
      'A type of image format',
      'A debugging tool'
    ],
    answer: 0,
    explanation: 'A polyfill is a script that implements features not natively supported by a browser.'
  },
  {
    category: 'Cross-browser Compatibility',
    question: 'Which HTML element is most likely to have inconsistent default styling across browsers?',
    options: ['<button>', '<div>', '<span>', '<section>'],
    answer: 0,
    explanation: 'The <button> element often has different default styles in different browsers.'
  },

  // Security & HTML
  {
    category: 'Security & HTML',
    question: 'What is the main purpose of the Content Security Policy (CSP) meta tag?',
    options: [
      'To prevent XSS and other code injection attacks',
      'To improve SEO',
      'To speed up page load',
      'To enable cookies'
    ],
    answer: 0,
    explanation: 'CSP helps prevent cross-site scripting (XSS) and other code injection attacks by restricting sources of content.'
  },
  {
    category: 'Security & HTML',
    question: 'Which attribute on <iframe> restricts its capabilities for security?',
    options: ['sandbox', 'secure', 'restricted', 'isolate'],
    answer: 0,
    explanation: 'The sandbox attribute restricts what an iframe can do, improving security.'
  },
  {
    category: 'Security & HTML',
    question: 'What is a common security risk when using the innerHTML property?',
    options: [
      'Cross-site scripting (XSS)',
      'Memory leak',
      'Slow rendering',
      'Broken links'
    ],
    answer: 0,
    explanation: 'Using innerHTML with untrusted content can lead to XSS vulnerabilities.'
  },
  {
    category: 'Security & HTML',
    question: 'Which attribute should you add to <a target="_blank"> for security?',
    options: ['rel="noopener"', 'rel="nofollow"', 'rel="alternate"', 'rel="bookmark"'],
    answer: 0,
    explanation: 'rel="noopener" prevents the new page from accessing the window.opener property, improving security.'
  },
  // HTML in Modern Frameworks
  {
    category: 'HTML in Modern Frameworks',
    question: 'What is JSX?',
    options: [
      'A syntax extension for JavaScript that looks like HTML',
      'A new HTML tag',
      'A CSS preprocessor',
      'A database query language'
    ],
    answer: 0,
    explanation: 'JSX is a syntax extension for JavaScript, used in React, that allows writing HTML-like code.'
  },
  {
    category: 'HTML in Modern Frameworks',
    question: 'How does Angular handle HTML templates?',
    options: [
      'With its own template syntax and directives',
      'With plain HTML only',
      'With JSX',
      'With PHP'
    ],
    answer: 0,
    explanation: 'Angular uses its own template syntax and directives to extend HTML.'
  },
  {
    category: 'HTML in Modern Frameworks',
    question: 'Which attribute is used in Vue.js for binding data to HTML?',
    options: ['v-bind', 'data-bind', 'ng-bind', 'js-bind'],
    answer: 0,
    explanation: 'v-bind is used in Vue.js to bind data to HTML attributes.'
  },
  // Mobile & Responsive HTML
  {
    category: 'Mobile & Responsive HTML',
    question: 'What does the viewport meta tag do?',
    options: [
      'Controls layout and scaling on mobile devices',
      'Sets the page background',
      'Defines the page title',
      'Loads external CSS'
    ],
    answer: 0,
    explanation: 'The viewport meta tag controls how a page is displayed and scaled on mobile devices.'
  },
  {
    category: 'Mobile & Responsive HTML',
    question: 'Which input type is optimized for numeric input on mobile devices?',
    options: ['number', 'text', 'email', 'range'],
    answer: 0,
    explanation: 'type="number" brings up a numeric keypad on most mobile devices.'
  },
  {
    category: 'Mobile & Responsive HTML',
    question: 'What is the purpose of the touch-action CSS property?',
    options: [
      'Controls how touch interactions are handled',
      'Sets the color of touch highlights',
      'Defines touch event listeners',
      'Enables touch scrolling'
    ],
    answer: 0,
    explanation: 'touch-action controls how touch interactions like panning and zooming are handled.'
  },
  // Internationalization & Localization
  {
    category: 'Internationalization & Localization',
    question: 'What does the dir attribute do?',
    options: [
      'Specifies text direction (ltr or rtl)',
      'Defines document language',
      'Sets the document encoding',
      'Specifies the domain'
    ],
    answer: 0,
    explanation: 'The dir attribute specifies the direction of text, such as left-to-right (ltr) or right-to-left (rtl).'
  },
  {
    category: 'Internationalization & Localization',
    question: 'Which attribute specifies the language of an HTML element?',
    options: ['lang', 'hreflang', 'locale', 'language'],
    answer: 0,
    explanation: 'The lang attribute specifies the language of an element, aiding screen readers and translation tools.'
  },
  {
    category: 'Internationalization & Localization',
    question: 'What is the purpose of the hreflang attribute in <a> or <link> tags?',
    options: [
      'Specifies the language of the linked document',
      'Defines the region',
      'Sets the encoding',
      'Specifies the author'
    ],
    answer: 0,
    explanation: 'hreflang specifies the language of the linked document, useful for SEO and localization.'
  },
  // HTML Evolution & History
  {
    category: 'HTML Evolution & History',
    question: 'Which tag was deprecated in HTML5?',
    options: ['<font>', '<div>', '<span>', '<section>'],
    answer: 0,
    explanation: 'The <font> tag was deprecated in HTML5 in favor of CSS for styling.'
  },
  {
    category: 'HTML Evolution & History',
    question: 'What is the main difference between HTML4 and HTML5?',
    options: [
      'HTML5 introduced semantic elements and APIs',
      'HTML4 supports video natively',
      'HTML5 removed all form elements',
      'HTML4 is more secure'
    ],
    answer: 0,
    explanation: 'HTML5 introduced semantic elements, native media support, and new APIs.'
  },
  {
    category: 'HTML Evolution & History',
    question: 'What is the purpose of the <dialog> element in HTML5?',
    options: [
      'To create native modal dialogs',
      'To define a section',
      'To add a comment',
      'To create a table'
    ],
    answer: 0,
    explanation: 'The <dialog> element provides a native way to create modal dialogs in HTML5.'
  },
  // Advanced/Edge-case Questions
  {
    category: 'Accessibility & ARIA',
    question: 'What is an ARIA live region?',
    options: [
      'A section of the page that updates dynamically and notifies assistive technologies',
      'A video stream',
      'A region with a map',
      'A region with a form'
    ],
    answer: 0,
    explanation: 'ARIA live regions notify screen readers of dynamic content updates.'
  },
  {
    category: 'HTML APIs & Advanced Features',
    question: 'Which API allows a web page to share content with native apps?',
    options: ['Web Share API', 'Web Storage API', 'WebGL API', 'Payment Request API'],
    answer: 0,
    explanation: 'The Web Share API allows web pages to invoke the native sharing capabilities of the device.'
  },
  {
    category: 'Performance & Optimization',
    question: 'What is the purpose of the preload attribute on <link> and <img>?',
    options: [
      'To instruct the browser to load resources early',
      'To lazy load images',
      'To defer script execution',
      'To compress images'
    ],
    answer: 0,
    explanation: 'preload tells the browser to fetch resources as soon as possible for better performance.'
  },
  {
    category: 'Cross-browser Compatibility',
    question: 'What is the inert attribute used for?',
    options: [
      'To make an element and its subtree inaccessible to user interaction and assistive tech',
      'To hide an element',
      'To disable CSS',
      'To remove an element from the DOM'
    ],
    answer: 0,
    explanation: 'The inert attribute disables interaction and accessibility for an element and its children.'
  },
]


















