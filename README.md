# ShortStoryApp
An application that allows users to import a text file and sort its contents alphabetically.

# Table of Contents
* [Assumptions](#assumptions)
* [Features](#features)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [Running Application](#running-application)

# Assumptions
To simplify processing, each new line in the file is treated as a single "sentence." This approach is taken because some quotations span multiple sentences, making it difficult to define sentence boundaries consistently.
The lines are then sorted alphabetically based on their character order. For instance, lines beginning with quotation marks will appear before those starting with the letter "A," since symbols are prioritized ahead of letters in alphabetical ordering.

# Features
 - "Import File" button: Allows the user to select a text file from the File Explorer. The name of the imported file is displayed in the textbox.
 - "Sort" button: Sorts the sentences in the imported file alphabetically.
 - "Clear" button: Removes the imported file and clears its content from the textbox.
 - Output textbox: Displays the content of the imported file.

# Screenshots
<img width="979" alt="{7AC05A20-855E-4A76-BE99-04138DD178E6}" src="https://github.com/user-attachments/assets/5afd84ee-f79b-49f6-b875-ca9975fe777b" />
<img width="928" alt="{5C05FFDE-E3CD-4CA4-A659-26975054D2BB}" src="https://github.com/user-attachments/assets/91485bb0-865f-4d65-b3df-7cb2025b3533" />
<img width="985" alt="{B29A65AB-5B3D-44CE-832B-BB6ADD09C5A2}" src="https://github.com/user-attachments/assets/b51ce56b-9956-4933-965d-67c0727a2544" />


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
