import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `codewizard | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
