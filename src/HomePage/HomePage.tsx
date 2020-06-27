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
                        This is the homepage of my little website</p>
                        <p> I hope you are going to enjoy this place!</p>
                        <p> Have a good day!</p>

                    <div className={st.avatar}>
                        <img/>
                    </div>
                    <div className={st.review}>
                        <p>Hey, you! Yes, you!</p>
                        <p> Send us your review about this website.</p>
                            <p> We appriciate any review.</p>
                                <p>  Thank you!</p>

                        <MyInputNya/>
                        <MyButtonNya value={'Say hello'}/>


                    </div>

        </div>


</div>
);
}

export default HomePage;
