import "./AboutUsStyle.css";


const AboutUs = () => {
    return (

        <>

        <section id="about">
            <div className="about-1">
                <h1>Who we are</h1>
                
            </div>
            <div className="about-2">
                <div className="content-box-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="bi bi-globe-americas"></i>
                                    <h3>MISSION</h3>
                                    <hr />
                                    <p>Our mission is to be a leader in the distribution and merchandising of food from the sunny Balkan directly to your table. We forge relationships with farmers who grow food in a natural way. We are devoted to using fresh ingredients with bold, wholesome and delicious flavours. We celebrate people's unique dietary needs and offer something for everyone. When you feel ready to try something new, come to our store.</p>


                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="bi bi-gem"></i>
                                    <h3>Our history</h3>
                                    <hr />
                                    <p>This store was opened back in 2007 by a couple of settlers from the Balkan itself. We always felt nostalgic for our country. Then we thought of a way how to bring our culture closer to us - the local cuisine. When we taste these products, we always feel closer to home. We believe that food brings people together. It's our great fortune we also happen to come from a sunny region overlooking the Mediterranean!</p>


                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="bi bi-balloon-heart"></i>
                                    <h3>Where to find us?</h3>
                                    <hr />
                                    <p>The Balkan Discount Market is located in Krč, Prague 4, just 20 minutes by walk from Krčský les and within easy access of the metro C line, stop Budějovická.<br />
                                    A new branch coming up! <br />
                                    We are working on opening the next branch for our customers in the lovely outskirts in Hloubětin, Prague 14, very close to the highway. Follow our social media for more updates.</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutUs;