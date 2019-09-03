---
layout: post
header: The Digital Innovation Group @ ASU
title: Let’s Develop an Infrastructure for Historical Research Tools
subtitle: Workshop at DH 2017 in Montréal
images: images/dh2017-skyline.png
#images_caption: "The University of Luxembourg campus at Belval"
summary: "Join us for the workshop “Let’s Develop an Infrastructure for Historical Research Tools” at the Digital Humanities Conference 2017! We would like to gather developers and programming-literate scholars to share their tool-building experiences and to present our first practical steps to create a system integrating multiple tools to work with historical documents from scan to analysis.
<br><br>
<b>Apply by July 1st, 2017!</b>
"
---
#### What is it about?
Scholars conducting historical research are provided with a growing range of digital humanities tools, supporting different phases of the research process: there is software for extracting text from documents (such as <a href ="https://poppler.freedesktop.org/" target = "_blank">pdftotext</a>, run OCR processes on images (for example <a href = "https://github.com/tesseract-ocr/tesseract" target = "_blank">Tesseract</a>), tools for the creation, analysis, and visualization of datasets (for instance <a href = "https://nodegoat.net/" target= "_blank">Nodegoat</a>, <a href = "http://hdlab.stanford.edu/palladio/" target= "_blank">Palladio</a>, or <a href= "http://www.viseyes.org/" target= "_blank">Visualeyes</a>), or software to work with annotations (for example <a href = "http://www.annotationstudio.org/" target = "_blank">Annotation Studio</a>) or networks (such as <a href = "https://gephi.org/" target= "_blank">Gephi</a> or <a href = "http://www.cytoscape.org/" target = "_blank">Cytoscape</a>). Programming libraries are being developed to serve the needs of humanity scholars, like <a href = "https://spacy.io/" target ="_blank">Spacy</a> or <a href = "http://diging.github.io/tethne/" target ="_blank">Tethne</a>. There are several repositories (such as <a href = "https://www.hathitrust.org/" target = "_blank">HathiTrust</a> or the <a href= "http://labs.europeana.eu/" target = "_blank">Europeana</a>) that provide access to sources and can easily be integrated into other services through APIs. Many tools, however, work well as self-contained units that scholars can use as singular parts of their research process, but cannot easily be combined into an integrated workflow by the researcher. Existing and new tools are developed using different languages and programming frameworks depending on requirements, skillset, and preference of the original developer, making reuse and integration harder for developers seeking to combine several tools. Moreover, since most tools are developed independently of each other, many efforts are repeated by reimplementing functionality that is already provided by a different piece of software.

To address these issues, join us for the workshop “Let’s Develop an Infrastructure for Historical Research Tools” at the Digital Humanities Conference 2017! We would like to gather developers and programming-literate scholars to share their tool-building experiences and to present our first practical steps to create a system integrating multiple tools to work with historical documents from scan to analysis. The workshop is intended as a starting point for future exchange and cooperation for digital humanities developers.

#### What is the basis for the workshop?
In the summer of 2016, the [Digital Innovation Group](https://diging.asu.edu) at <a href = "http://asu.edu" target = "_blank ">Arizona State University (ASU)</a> and the <a href = "http://mpiwg-berlin.mpg.de" target ="_blank">Max Planck Institute for the History of Science (MPIWG)</a> started to combine their efforts in developing software for the history of science. One outcome of this collaboration is a research system that allows users to manage their documents, automatically runs OCR on uploaded files, provides an image viewer for uploaded and extracted images, and integrates document management with a multi-user Jupyter notebook server for writing analysis and visualization scripts. Rather than one big system, however, the research system is comprised of several integrated services developed independently of each other using different programming languages and frameworks.

#### How will the workshop work?
The first half of our workshop will give tool developers a chance to present their software. Every presenter will be allowed 10 minutes for their presentation and 5 minutes for questions. The second half will be dedicated to discussing how different tools can be connected and integrated, and how we can build a community around those tools.

We envision the results of this workshop to be a concrete roadmap of how different tools will be integrated. We will define interfaces and API requirements, and if possible start development work during the workshop. Second, we will develop an organizational strategy for cooperation and collaboration among different projects. To aid organization, we will provide a Jira and Confluence project that participants can use during and after the workshop to organize collaboration.

We plan on organizing a follow-up meeting at the end of 2017 at Arizona State University to review progress since the initial workshop and plan next steps. If the collaboration is successful, we hope to establish regular meetings and expand the group to connect more tools and services.

#### Can I participate?
Yes! We are looking for presenters who will showcase their software for integration with the other presented tools. We would like you to focus on the following key questions:
-	What is the general workflow of the tool?
-	What is the core functionality of the tool?
-	What input and output formats does the tool accept? Or what interfaces does it expose?
-	What license model was chosen?
-	What features are still missing and what are the next development goals?
-	How is maintenance and development of the tool organized?

If you’d like to present, please send a short description of your tool (~500 words), preferably with links to source code, project site, and other information you have to [jdamerow@asu.edu](mailto:jdamerow@asu.edu). *The deadline for the call is July 1st, 2017.*

#### I don’t have anything to present, can I still come?
Yes! We hope to gather people with all kinds of technical backgrounds; developers, historians with programming background, scholars with a technical background, and generally people involved in the development of tools to support historical research. Your input will be important for future development efforts and to create a widely applicable system.
