$(function(){

  // Fejléc navigáció behelyezése
  // Így a fejlécet elég egy helyen 
  // megváltoztatni ahhoz hogy az összes 
  // html fájlban megváltozon
  document.getElementById('nav').innerHTML = `
	<nav class="navbar navbar-expand-lg navbar-dark">
	  
	  <a class="navbar-brand" href="index.html">BBB Hotel</a>
	  
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  
	  <div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
		  <li class="nav-item">
			<a class="nav-link" href="index.html">Rólunk</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="szolgaltatasok.html">Szolgáltatásaink és Áraink</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="kozelunkben.html">Közelenükben található</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="elerhetosegek.html">Elérhetőségek</a>
		  </li>
		</ul>
	  </div>
	  
	</nav>
  `;

  document.getElementById('footer').innerHTML = `
	<footer class="page-footer font-small blue pt-4 text-light bg-dark">
		<div class="container-fluid text-center text-md-left">
			<div class="row">
				<div class="col-md-6 mt-md-0 mt-3">
					<h5 class="text-uppercase">Lábléc Tartalma</h5>
					<p>Ez a lábléc szövegének a helye.</p>
				</div>

				<hr class="clearfix w-100 d-md-none pb-3">

				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Linkek</h5>
					<ul class="list-unstyled">
						<li>
							<a href="index.html" class="text-light">Rólunk</a>
						</li>
						<li>
							<a href="szolgaltatasok.html" class="text-light">Szolgáltatásaink és Áraink</a>
						</li>
					</ul>
				</div>

				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Linkek</h5>
					<ul class="list-unstyled">
						<li>
							<a href="kozelunkben.html" class="text-light">Közelünkben található</a>
						</li>
						<li>
							<a href="elerhetosegek.html" class="text-light">Elérhetőségek</a>
						</li>
					</ul>
				</div>
				
			</div>
		</div>

		<div class="small text-muted footer-copyright text-center py-3">
			Copyright © 2020 <a href="https://martinkondor.github.io/">Martin Kondor</a>
		</div>
	</footer>
  `;

});
