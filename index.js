/* Javascript is a Scripting language.
    that allows you to implement complex features of webpage.
    let's say that you build one house 
        HTML :- 
        the house built with the help of bricks pillars and cement is what called structure of house 
        in website also we create structure of webpage with the help of HTML(Hypertext Markup Language).

        CSS :- 
        after all the plaster has been done now next what is we color our house or home with paint according to our 
        choices which we like the most..
        CSS (Cascading Style Sheets) is the one who help us to style our website.

        -------------------------------------------------JavaScript------------------------------------------------------------------
        Ok the main important thing is the functionality of the house. now you hang on the beautiful lights and switch 
        board but when you switch on the light what if the bulb is not glow ??? How does this happen but obvious if you don't work on
        functionality of the switch how does that bulb or light glow right ???? here comes the javascript on webpages

        now on your website you put submit button on form, but how that button responds after click operatio has been done is what 
        a JS do?
        it has onClick like EventListeners with the help of JS we simply put functionalities to the system or websites or apps.

*/

/* How to Add JavaScript in HTML Document ?
    1. Add JavaScript Code inside the Head Section 
        <!DOCTYPE html>
        <html>
        <head>
            <title>
                Add JavaScript Code inside Head Section
            </title>
            <script> 
                function myFun() {
                    document.getElementById("demo")
                        .innerHTML = "Content changed!";
                }
            </script>
        </head>
        <body>
            <h2>
                Add JavaScript Code 
                inside Head Section
            </h2>
        </body>
        </html>

    /*2. Add JavaScript Code inside Body Section 
        <!DOCTYPE html>
        <html>
        <head>
            <title>
                Add JavaScript Code inside Body Section
            </title>
        </head>
        <body>
            <button type="button" onclick="myFun()">
                Click Here
            </button>
        
            <script>
                function myFun() {
                    document.getElementById("demo")
                        .innerHTML = "Content changed!";
                }
            </script>
        </body>
        </html>
    
    /* 3. External JavaScript
        A. By using a full URL:
        src = "https://www.geeksforgeek.org/js/script.js"

        B. By using a file path:
        src = "/js/script.js"

        C. Without using any path:
        src = "script.js" 
*/ 