import React from 'react'
import achievementData from '../../data/achievement-23-24.json';
import '../common/common.css';

function Achievement2324() {
console.log(achievementData);
    return (<div className='leftit'>
        <br></br>
          <ol>
            {achievementData.achievementData.map((object, i) => (
              <li>
                {object}
              </li>
            ))}
          </ol>
          </div>
      );
}

export default Achievement2324;