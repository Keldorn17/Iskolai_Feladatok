const nav = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Munkák</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="MathQuestion.html">Math</a>
            <a class="nav-link" href="BMI.html">BMI</a>
            <a class="nav-link" href="calculator.html">Calculator</a>
            <a href="movies.html" class="nav-link">Movies</a>
          </div>
        </div>
      </nav>
`
document.body.insertAdjacentHTML("beforebegin",nav)