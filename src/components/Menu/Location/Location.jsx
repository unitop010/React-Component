import React from 'react';
import { motion } from 'framer-motion';
import { mapAnim } from './Location.anim';

export const Location = () => {
	return (
		<div className='locationContainer'>
			<motion.p className='location' inital='init' animate='init' whileHover='hover' whileTap='hover'>
				Designed by <span>@codewizard337</span>
				{/* <motion.span className='locationMap' variants={mapAnim}></motion.span> */}
			</motion.p>
		</div>
	);
};
