var paragraphs = document.getElementsByTagName("p");
paragraphs[paragraphs.length-1].lastChild.setAttribute("itemprop","url");

// could also label abstracts, potential for bio/chem annotation
//    "     "     " image with itemprop=thumbnailUrl
//    "     " use itemprop="sameAs" for equivalent with doi
//    "     " list doi as a js variable, feed into dx.doi URL
//    "     " obtain PMID via CrossRef if had DOI, link to its PubMed entry
