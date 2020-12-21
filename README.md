<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .flexHeader {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 200px;
        }

        .flexAbout {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 200px;
        }

        .imgFlex {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: red;
        }
    </style>
</head>

<body>
    <header class="flexHeader">
        <h2>Quire 1.0</h2>
        <h3> A webbased noteapp made by Team Ink, front end developer students @ KYH Stockholm</h3>
    </header>

    <section class="flexAbout">
        <h2>About us</h2>
        <p>We are Team Ink, a group of 4 students named Andela, Nikolas, Sascha and Julius</p>
    </section>

    <article>

        <div class="imgFlex">
            <img src="/Images/andela.jpg" width="300" height="300" style="vertical-align:middle;margin:50px 0px"
                alt="">p Hi ! My name is Andela
            <img src="/Images/nikolas.jpg" width="300" height="300" style="vertical-align:middle;margin:50px 0px"
                alt="">Hi ! My name is Nikolas
            <img src="/Images/sascha.jpg" width="300" height="300" style="vertical-align:middle;margin:50px 0px"
                alt="">Hi ! My name is Sascha
        </div>
        Here is our repo
        <a href="https://github.com/andelarajic/fe20tp1_Ink">
            https://github.com/andelarajic/fe20tp1_Ink
        </a>
    </article>





</body>

</html>