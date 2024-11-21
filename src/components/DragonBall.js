import React from 'react';

import img1 from '../assets/dgb1.webp';
import img2 from '../assets/dgb2.webp';
import img3 from '../assets/dgb3.webp';

const DragonBall = () => {
    return (
        <div className="tips-container">
            <h1>Tips for Battle Cats!</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nulla vehicula tortor sit amet eros placerat, in fermentum purus iaculis.</li>
                <li>Curabitur in ligula vitae urna suscipit maximus.</li>
                <li>
                    Sed consequat magna ut orci vestibulum, et sodales augue pretium.
                    <ul>
                        <li>Phasellus efficitur mi ac dolor vulputate, a varius nisi bibendum.</li>
                        <li>Curabitur in urna id libero condimentum malesuada.</li>
                    </ul>
                    <img src={img1} alt='Image 1' className='images' />
                </li>
                <li>Vestibulum fringilla lorem a eros tempor, ac elementum felis dictum.</li>
                <li>
                    Integer facilisis nisi et justo vehicula, sit amet egestas erat auctor.
                    <ul>
                        <li>Praesent laoreet sapien euismod nisi lobortis, at luctus ante elementum.</li>
                        <li>
                            Nunc varius ipsum vitae odio tempus, at vestibulum purus sollicitudin.
                            <ul>
                                <li>Maecenas pretium felis nec ligula tincidunt, a volutpat odio lacinia.</li>
                                <li>Curabitur eget nisl a urna fermentum facilisis.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <img src={img2} alt='Image 2' className='images' />
                <li>Phasellus feugiat tortor in nunc tempor, at efficitur magna placerat.</li>
                <li>Nam vestibulum sapien ac felis eleifend malesuada.</li>
                <img src={img3} alt='Image 3' className='images' />
                <li>Quisque sit amet est id libero auctor scelerisque.</li>
                <li>Donec id lorem nec sapien dapibus iaculis.</li>
            </ul>
        </div>
    )
}

export default DragonBall
