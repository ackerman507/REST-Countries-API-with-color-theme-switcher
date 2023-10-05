<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>REST Countries API with color theme switcher</title>
</head>

<body class="light">

    <nav class="navbar shadow-sm">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold ms-lg-5">Where in the world?</a>
            <button id="theme-toggle" type="button" class="btn btn-sm"><i class="fa-regular fa-moon"></i> Dark
                Mode</button>
        </div>
    </nav>
    <div class="container-fluid p-3">
        <div class="row mx-lg-5">
            <div class="col-md-2 col-4 py-4">
                <a type="button" class="btn btn-sm shadow w-100" href="index.html"><i class="fa-solid fa-arrow-left-long"></i> Back</a>
            </div>
        </div>
        <div class="row mt-4 mx-lg-5 d-flex justify-content-between">
            <div class="col-md-5 mb-3"><img src="" class="img-fluid" alt="" srcset="" id="image"></div>
            <div class="col-md-6 d-flex justify-content-center flex-column" id="details">
                <h3 id="txtCountry"></h3> <input type="hidden" name="alpha3Code" id="alpha3Code" value="<?php echo $_GET["alpha3Code"]; ?>">
                <div class="row" >
                    <div class="col-md-6">
                        <p id="txtName" class="mb-0 text-muted"><b> Native Name: </b></p>
                        <p id="txtPopulation" class="mb-0 text-muted"><b> Population: </b></p>
                        <p id="txtRegion" class="mb-0 text-muted"><b> Region: </b></p>
                        <p id="txtSubRegion" class="mb-0 text-muted"><b> Sub Region:</b></p>
                        <p id="txtCapital" class="text-muted"><b> Capital: </b></p>
                    </div>
                    <div class="col-md-6">
                        <p id="txtTop" class="text-muted mb-0"><b>Top Level Domain: </b> </p>
                        <p id="txtCurrencies" class="text-muted mb-0"><b>Currencies: </b></p>
                        <p id="txtLanguages" class="text-muted "><b>Languages: </b></p>
                    </div>
                </div>

                <div class="row d-inline">
                    <div class="d-inline">
                        <p id="txtBorder" class="text-muted d-inline"><b>Border Countries: </b></p>
                    </div>
                    <div id="divBorders" class="d-inline">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/ae5d17b983.js" crossorigin="anonymous"></script>
    <script src="js/details.js"></script>
</body>

</html>