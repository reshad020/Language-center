import React from 'react';
import imgkamil from '../../images/kamil.jpeg'
import imgMahib from '../../images/siam.jpeg'
import imgReshad from '../../images/reshad.jpeg'
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-16 mt-8 mb-16">
            <Teacher name="Mahib Mahmud" img={imgMahib}></Teacher>
            <Teacher name="Aehtesham Reshad" img={imgReshad}></Teacher>
            <Teacher name="Kamil Hassan" img={imgkamil}></Teacher>
        </div>
    );
};

export default Teachers;