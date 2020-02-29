papers = {"data":[{"citation":"Moody, Christopher E. <strong>\"Mixing dirichlet topic models and word embeddings to make lda2vec.\"<\/strong> arXiv preprint arXiv:1605.02019 (2016).","link":"https:\/\/arxiv.org\/abs\/1605.02019","notes":"Dug really deep into this paper as I was learning more and more about generating my own embedding spaces. Implemented this paper and found it very difficult to get quality results. Seems like this is a common problem and the original implementation does seem to work either (supported by issues and another implementor's results). Maybe there is a training problem when jointly learning distributions or compositions of distributions?","last_updated":1575046256.9375832081,"created_at":1575045754.5449368954,"id":"5ffed44a-ebe2-4172-a76e-40cd1281ba02"},{"citation":"Ishmael Belghazi, Aristide Baratin, Sai Rajeswar, Sherjil Ozair, Yoshua Bengio, Aaron Courville, and R Devon Hjelm. <strong>\"Mine: mutual information neural estimation.\"<\/strong> arXiv preprint arXiv:1801.04062, ICML\u20192018, 2018.","link":"https:\/\/arxiv.org\/abs\/1801.04062","notes":"Very cool approach. Makes me want to dig more into information theory-based ML papers. Gotta see what this whole Information Bottleneck thing is.","last_updated":1575046283.3221960068,"created_at":1575045958.8890528679,"id":"44a2dfb3-2e1c-4f99-8e97-d66e35686c1a"},{"citation":"Hjelm, R. Devon, et al. <strong>\"Learning deep representations by mutual information estimation and maximization.\"<\/strong> arXiv preprint arXiv:1808.06670 (2018).","link":"https:\/\/arxiv.org\/abs\/1808.06670","notes":"Natural extension to MINE with the same clarity.","created_at":1575058375.1809160709,"id":"5df9bee1-e40c-464a-b98c-896de8a5f766"},{"citation":"Schwartz, Martin A. <strong>\"The importance of stupidity in scientific research.\"<\/strong> Journal of Cell Science 121.11 (2008): 1771-1771.","link":"https:\/\/jcs.biologists.org\/content\/joces\/121\/11\/1771.full.pdf","notes":"Gives focus to what is important.","created_at":1575328625.8627240658,"id":"f78ad082-1712-4fb0-a47e-fc3f708ced7d"},{"citation":"Petsiuk, Vitali, Abir Das, and Kate Saenko. <strong>\"Rise: Randomized input sampling for explanation of black-box models.\"<\/strong> arXiv preprint arXiv:1806.07421 (2018).","link":"https:\/\/arxiv.org\/abs\/1806.07421","notes":"A logically sound paper on generating saliency maps in a model-agnostic manner. Dug pretty deep into this one about a year ago.","created_at":1575392368.1973569393,"id":"7be33e65-3763-457b-ab8b-95b72c25800a"},{"citation":"He, Di, et al. <strong>\"Dual learning for machine translation.\"<\/strong> Advances in Neural Information Processing Systems. 2016.","link":"https:\/\/arxiv.org\/abs\/1611.00179","notes":"Introduced me to the ideal of dual learning - interesting approach to capturing information.","created_at":1575611124.6176400185,"id":"d0d50925-eedc-46a9-8418-60c90193844b"},{"citation":"Bau, David, et al. <strong>\"Gan dissection: Visualizing and understanding generative adversarial networks.\"<\/strong> arXiv preprint arXiv:1811.10597 (2018).","link":"https:\/\/arxiv.org\/abs\/1811.10597","notes":"\"How does a GAN represent our visual world internally? What causes the artifacts in GAN results? How do architectural choices affect GAN learning? Answering such questions could enable us to develop new insights and better models.\"","created_at":1575684929.1872570515,"id":"5f254568-2334-40c7-a77d-bed7a172fa33"},{"citation":"Zhou, Hattie, et al. <strong>\"Deconstructing lottery tickets: Zeros, signs, and the supermask.\"<\/strong> arXiv preprint arXiv:1905.01067 (2019).","link":"https:\/\/arxiv.org\/abs\/1905.01067","notes":"First paper to find that random subnetworks that do well on a task do exist (that I've seen) - i.e. supermasks","created_at":1576948168.206610918,"id":"b47d137d-6974-4e2d-9b8b-13f9e0824b10"},{"citation":"Ramanujan, V., Wortsman, M., Kembhavi, A., Farhadi, A., & Rastegari, M. <strong>\"What\u2019s Hidden in a Randomly Weighted Neural Network?\"<\/strong> arXiv preprint arXiv:1911.13299 (2019)","link":"https:\/\/arxiv.org\/pdf\/1911.13299.pdf","notes":"Offers a \"complementary conjecture\" to the lottery ticket hypothesis and continues to show that a lot of useful stuff is already in a random network. \r\n\r\nCould probably replace the score gradient update with a Montecarlo approximation like the one used in RISE? - Tried this - did not work.\r\n\r\nReverse NEAT - start at some large network and prune down?","last_updated":1576966824.7382230759,"created_at":1575392192.8821098804,"id":"5069be6e-78a9-4b61-a4a6-6c016465cf14"},{"citation":"Schwarz, Jonathan, et al. <strong>\"Progress & compress: A scalable framework for continual learning.\"<\/strong> arXiv preprint arXiv:1805.06370 (2018).","link":"https:\/\/arxiv.org\/abs\/1805.06370","notes":"Having a knowledge base is an interesting idea, but the experimental results are not all that compelling. It seems most approaches against CF can't compete with single model accuracy except for progressive nets (which don't scale). Lays out clear desiderata though.","created_at":1577034986.3405959606,"id":"a685c77f-95af-40c2-8dba-b85932a210bc"},{"citation":"Leclerc, Guillaume, et al. <strong>\"Smallify: Learning network size while training.\"<\/strong> arXiv preprint arXiv:1806.03723 (2018).","link":"https:\/\/arxiv.org\/abs\/1806.03723","notes":"Shrinks network during training - optimizes a mask while optimizing performance as well. Includes a garbage collector for neurons to speed up inference. Can we find lottery in the same time it takes to training one network?","created_at":1577043964.6464288235,"id":"9d11d06b-386a-4787-9d48-10a13c9aeedc"},{"citation":"Ji, Xu, Jo\u00e3o F. Henriques, and Andrea Vedaldi. <strong>\"Invariant information clustering for unsupervised image classification and segmentation.\"<\/strong> Proceedings of the IEEE International Conference on Computer Vision. 2019.","link":"https:\/\/arxiv.org\/pdf\/1807.06653v4.pdf","notes":"Very strong results while poking holes in past MI approaches such as MINE. Will want to dig deeper - unclear to me how joint is estimated.","created_at":1577159804.2928729057,"id":"a319cd6e-29c1-41fa-978e-82c076567b18"},{"citation":"Brendel, Wieland, and Matthias Bethge. <strong>\"Approximating cnns with bag-of-local-features models works surprisingly well on imagenet.\"<\/strong> arXiv preprint arXiv:1904.00760 (2019).","link":"https:\/\/arxiv.org\/abs\/1904.00760","notes":"These similarities suggest that current network architectures base their decisions on a large number of relatively weak and local statistical regularities and are not sufficiently encouraged.\r\n\r\nWhat about bag-of-word models?","created_at":1577290932.3185889721,"id":"43d3d1e1-5a75-4500-9bda-1010c846439c"},{"citation":"Chollet, Fran\u00e7ois. <strong>\"The Measure of Intelligence.\"<\/strong> arXiv preprint arXiv:1911.01547 (2019).","link":"https:\/\/arxiv.org\/abs\/1911.01547","notes":"A very philosophical paper that attacks competition based science that has dominated DL since its revitalization in the 2000s. Focuses on providing an actionable measure of intelligence. Dataset put forward (ARC) has some issues but overall is a great step towards getting the ML community thinking more about intelligence and less about SOTA.","created_at":1577587788.2892839909,"id":"29f74a57-64c2-4ccc-a11c-3fec7b7e9a8e"},{"citation":"Perozzi, Bryan, Rami Al-Rfou, and Steven Skiena. <strong>\"Deepwalk: Online learning of social representations.\"<\/strong> Proceedings of the 20th ACM SIGKDD international conference on Knowledge discovery and data mining. ACM, 2014.","link":"https:\/\/arxiv.org\/abs\/1403.6652","notes":"An interesting generalization of word2vec.","created_at":1578247317.6528499126,"id":"496f9b4b-cce9-4c08-9f62-fe0e47b50ff2"},{"citation":"Bengio, Yoshua, et al. <strong>\"A neural probabilistic language model.\"<\/strong> Journal of machine learning research 3.Feb (2003): 1137-1155.","link":"http:\/\/www.jmlr.org\/papers\/volume3\/bengio03a\/bengio03a.pdf","notes":"Should really be read before word2vec.","created_at":1578250140.3692789078,"id":"148dca6c-c310-4985-8f77-73df090a95b4"},{"citation":"Le, Quoc, and Tomas Mikolov. <strong>\"Distributed representations of sentences and documents.\"<\/strong> International conference on machine learning. 2014.","link":"https:\/\/cs.stanford.edu\/~quocle\/paragraph_vector.pdf","notes":"Part of my recent review of word embeddings","created_at":1578259090.2282660007,"id":"eca1bd60-5d2e-48e1-ac64-7c9f5488e2ec"},{"citation":"Chen, Zhao, et al. <strong>\"Gradnorm: Gradient normalization for adaptive loss balancing in deep multitask networks.\"<\/strong> arXiv preprint arXiv:1711.02257 (2017).","link":"https:\/\/arxiv.org\/abs\/1711.02257","notes":"Thought of something similar - found this","last_updated":1578620820.5069060326,"created_at":1578620797.9931550026,"id":"0c995be5-bb73-4e00-9da3-904a40798c19"},{"citation":"Dieng, Adji B., Francisco JR Ruiz, and David M. Blei. <strong>\"Topic modeling in embedding spaces.\"<\/strong> arXiv preprint arXiv:1907.04907 (2019).","link":"https:\/\/arxiv.org\/abs\/1907.04907","notes":"Applied to PyPI dataset and can probably extended to include document vectors.","created_at":1580679696.9950211048,"id":"31b54f6f-cc32-42cb-afd7-4a95ca5291bf"},{"citation":"Chen, Ting, et al. <strong>\u201cA Simple Framework for Contrastive Learning of Visual Representations.\u201d<\/strong> ArXiv:2002.05709 [Cs, Stat], Feb. 2020. arXiv.org, http:\/\/arxiv.org\/abs\/2002.05709.","link":"https:\/\/arxiv.org\/pdf\/2002.05709.pdf","notes":"Really interesting analysis of contrastive learning for visual representations. Things like batch size, random crops, color adjustments, are all analyzed to find the best learning configuration. This is strong empirical work out-performing methods like mutual information maximization. Maybe theory can be simpler?","created_at":1581721242.985970974,"id":"4647a394-7497-41dd-9a2d-84a9bdf73d6a"},{"citation":"Bengio, Yoshua, Aaron Courville, and Pascal Vincent. <strong>\"Representation learning: A review and new perspectives.\"<\/strong> IEEE transactions on pattern analysis and machine intelligence 35.8 (2013): 1798-1828.","link":"https:\/\/arxiv.org\/pdf\/1206.5538.pdf","notes":"Representation learning is awesome and probably the core achievement of deep learning.","created_at":1582141194.2754781246,"id":"fbeca015-71ae-4b31-8398-e0d3b0cbb19b"},{"citation":"Lamb, Alex, et al. <strong>\"SketchTransfer: A Challenging New Task for Exploring Detail-Invariance and the Abstractions Learned by Deep Networks.\"<\/strong> arXiv preprint arXiv:1912.11570 (2019).","link":"https:\/\/arxiv.org\/pdf\/1912.11570.pdf","notes":"Definitely an unsolved area in domain transfer","created_at":1582240958.0420081615,"id":"9b3cd16f-1f78-42ae-819a-756e956f8799"},{"citation":"Frankle, Jonathan, and Michael Carbin. <strong>\"The lottery ticket hypothesis: Finding sparse, trainable neural networks.\"<\/strong> arXiv preprint arXiv:1803.03635 (2018).","link":"https:\/\/arxiv.org\/abs\/1803.03635","notes":"First paper I ever led a paper discussion on in spring of my freshman year - found the paper on arxiv (lucky catch)! One of those papers with a clear simple idea that demonstrably works.","last_updated":1582241007.7337510586,"created_at":1575135390.5018129349,"id":"c0b9a47d-ad29-4f0a-aa1b-63e20f10d84a"},{"citation":"Sch\u00f6lkopf, Bernhard. <strong>\"Causality for Machine Learning.\"<\/strong> arXiv preprint arXiv:1911.10500 (2019).","link":"https:\/\/arxiv.org\/abs\/1911.10500","notes":"Very strong, opinionated paper that lays out clear expectations for the field of machine learning w.r.t causality. Will want to come back to this once I have a stronger background in causal inference.","created_at":1582939928.3886730671,"id":"926cd64d-034d-45a2-9489-50de06dcac49"}],"last_updated":1582940326.1130599976}