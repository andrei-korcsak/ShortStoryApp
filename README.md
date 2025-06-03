# ShortStoryApp
An application that allows users to import a text file and sort its contents alphabetically.

# Table of Contents
* [Assumptions](#assumptions)
* [Features](#features)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [Running Application](#running-application)

# Assumptions
To simplify processing, each new line in the file is treated as a single "sentence". This approach is taken because some quotations span multiple sentences, making it difficult to define sentence boundaries consistently.
The lines are then sorted alphabetically based on their character order. For instance, lines beginning with quotation marks will appear before those starting with the letter "A," since symbols are prioritized ahead of letters in alphabetical ordering.

# Features
 - Import File button: Allows the user to select a text file from the File Explorer. The name of the imported file is displayed in the textbox.
 - Sort button: Sorts the sentences in the imported file alphabetically.
 - Clear button: Removes the imported file and clears its content from the textbox.
 - Output textbox: Displays the content of the imported file.

# Screenshots
<img width="912" alt="{0045D187-3D22-4EA8-A52C-5998EFBBFD97}" src="https://github.com/user-attachments/assets/e29ea515-20d3-4281-8eb9-604e447117a0" />
<img width="912" alt="{8B201C32-A9B2-4E5A-9FCD-895120756794}" src="https://github.com/user-attachments/assets/116f193e-cd89-4f2a-81c5-ce0e6fea1137" />
<img width="912" alt="{EDA2A85A-0C68-4155-84E0-FB2D9FA65130}" src="https://github.com/user-attachments/assets/bd9156b7-c41d-45c9-bf2d-a9f0670f45c8" />


# Technologies Used
- ASP.NET Core
- C#
- ReactJS
- Javascript
- HTML
- CSS

# Running Application
Open the command line at the preferred location to clone the repository by executing the command below:
- git clone https://github.com/andrei-korcsak/ShortStoryApp.git

Once the repository has been succesfully cloned, open the ShortStoryApp.sln in Visual Studio and run the application.
