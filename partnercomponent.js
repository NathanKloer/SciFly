const Partners = () =>
<div class="container card container-fluid">
<div class="row">
    <div class="col-sm-4">

        <div class="title">
            <div class="card-body text-left">
                <h5 class="title">Our Charity Partners</h5>

            </div>
            </img>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card card-right">
            <div class="card-body text-right">
                <p class="card-text">This digital inventory is made possible by the following charities. If you wish to make a donation,
                    we ask you do so through one of their donation services.</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="card" style="width: 60rem;">
        <div class="card-body">
                <img class="" src="assets/images/download.png" alt="">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">visit their site</a>
        </div>
    </div>
</div>
        ReactDOM.render(
    <Partners />,
        document.getElementById('root')
);