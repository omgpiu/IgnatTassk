import React from 'react';
import st from './HomePage.module.css';
import MyButtonNya from '../TaskThreeAndFour/MyButton/MyButton';
import MyInputNya from '../TaskThreeAndFour/MyInput/MyInput';

function HomePage() {


    return (
        <div className={st.wrapper}>

                <div className={st.story}>
                    <h1>Hello everyone!</h1>
                    <p>
                        This is the homepage of my little website
                        I hope you are going to enjoy this place!
                        Have a good day!
                    </p>
                    <div className={st.avatar}>
                        <img/>
                    </div>
                    <div className={st.review}>
                        <p>Hey, you! Yes, you!
                            Send us your review about this website.
                            We appriciate any review.
                            Thank you!
                        </p>
                        <MyInputNya/>
                        <MyButtonNya/>


                    </div>

        </div>


</div>
);
}

export default HomePage;
