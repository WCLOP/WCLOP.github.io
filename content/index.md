---
title: 1st ICCV Workshop and Challenge on Category-Level Object Pose Estimation in the Wild
---

<p class="text-center">
  Sep. 15th, 2025
</p>

## Summary

This workshop addresses the critical problem of category-level object pose estimation and its applications within complex robotic manipulation scenarios. Pose estimation, a fundamental challenge in both 3D computer vision and robotics perception, involves accurately determining an object's complete 6-degree-of-freedom (6DoF) pose, comprising its 3D rotation and translation. Our workshop specifically focuses on advancing category-level pose estimation methods under realistic and demanding robotic manipulation settings, particularly emphasizing articulated objects, dynamic environments with potential human-object interactions, and objects subject to severe occlusions and partial visibility.

### Benchmarks

To facilitate rigorous evaluation and stimulate innovation, the workshop will include two benchmarks as the following.

#### Category-Level Pose Estimation in Complex Real-World Scenarios

This track aims to benchmark current methods of category-level pose estimation using diverse, challenging datasets representative of real-world robotics scenarios. Participants will be encouraged to develop robust, generalizable, and computationally efficient algorithms. We will utilize existing large-scale benchmark datasets, such as PACE and Omni6DPose, together with our another curated dataset specifically collected for real-world robotic manipulation scenarios with UR-5, including articulated objects, dynamic object-camera interactions, within-hand manipulation scenarios, and complex occlusions.

#### Pose Estimation Evaluation Through Downstream Robotic Manipulation Tasks

The second track assesses the practical efficacy of pose estimation methods by integrating them directly into downstream robotic manipulation tasks. The 6DoF pose has been established as a reliable and invariant representation, significantly bridging the simulation-to-real-world transfer gap. In this challenge, we will employ the ManiSkill simulation environment, featuring tasks such as opening microwaves, drawer manipulation, pick-and-place operations, in-hand rotation, and water pouring. Participants will be provided with an oracle manipulation policy pre-trained using ground-truth 6DoF poses, achieving near-perfect performance. Competing methods will supply pose estimation inputs to this policy, and their performance will be directly measured through manipulation task success rates. Thus, higher accuracy in pose estimation is directly correlated with increased task success. We will also compare their inference speed as real-time performance is often a requirement for robotic manipulation.

### Workshop Objectives

- Foster a deeper understanding of the challenges associated with category-level object pose estimation in varied environments.
- Encourage the development and sharing of innovative techniques that ensure robust model performance on large-scale datasets.
- Promote community-wide collaboration to continually refine benchmarks and methodologies, advancing the field of computer vision.

### Expected Benefits

- Gaining insights into the latest research and technological advancements in category-level pose estimation.
- Engaging with leading experts to discuss the current challenges and future directions of the field.
- Accessing new tools and frameworks that facilitate the development of more effective and adaptable pose estimation models.

By bridging cutting-edge advancements in category-level pose estimation with realistic robotic manipulation tasks, this workshop aims to foster interdisciplinary collaboration, inspire novel methodologies, and ultimately advance the capabilities of robotic agents operating autonomously in dynamic, unstructured, and complex real-world environments.

<!-- ![Example image (place image in public folder)](/img/teaser-min.png) -->

## Call for papers

We welcome submissions of full papers (up to 8 pages) and short papers (up to 4 pages), excluding references and appendices. All submissions must adhere to the ICCV 2025 format and will undergo peer review by domain experts. Accepted papers will be featured either as oral presentations or posters during the workshop. Topics of interest include, but are not limited to:

- Category-level 6D object pose estimation and tracking
- Open-vocabulary object segmentation and 6D pose estimation
- 6D pose estimation for optically challenging objects, such as transparent or reflective surfaces
- Pose-aware robotics: leveraging object pose in autonomous robotic systems

We encourage novel research that pushes the boundaries of category-level object pose estimation, with a focus on real-world challenges and applications.

### Paper Review Timeline

- Paper submission and supplemental material deadline: Aug. 15, 2025
- Notification to authors: Sep. 10, 2025
- Camera ready deadline: Sep. 15, 2025

## Organizers

### Lead Organizers

::avatar-list
---
avatars:
  - name: Yang You
    link: https://qq456cvb.github.io
    image: /avatars/yang_you.png
    description: Stanford University
  - name: Jiyao Zhang
    link: https://jiyao06.github.io
    image: https://jiyao06.github.io/images/jiyao_circle.jpg
    description: Peking University
  - name: Jiankai Sun
    link: https://web.stanford.edu/~jksun/
    image: https://web.stanford.edu/~jksun/images/profile.jpg
    description: Stanford University
---
::

### Organizing Committee

::avatar-list
---
avatars:
  - name: Leonidas Guibas
    link: https://profiles.stanford.edu/leonidas-guibas
    image: https://profiles.stanford.edu/proxy/api/cap/profiles/8099/resources/profilephoto/350x350.1368774000000.jpg
    description: Stanford University
  - name: Chen Wang
    link: https://sairlab.org/team/chenw/
    image: https://sairlab.org/img/team/chen-2023.jpg
    description: University at Buffalo
  - name: Luca Carlone
    link: https://lucacarlone.mit.edu/
    image: https://lucacarlone.mit.edu/wp-content/uploads/2017/07/Screen-Shot-2017-09-15-at-21.48.34.png
    description: MIT
  - name: Linfang Zheng
    link: https://lynne-zheng-linfang.github.io/
    image: /avatars/linfang_zheng.png
    description: University of Birmingham
  - name: Mac Schwager
    link: https://web.stanford.edu/~schwager/
    image: https://msl.stanford.edu/images/people/macschwager.jpg
    description: Stanford University
  - name: Cewu Lu
    link: https://www.mvig.org/
    image: https://i1.wp.com/ww1.sinaimg.cn/large/006y8lVajw1f92jdiu2udj308c08cgme.jpg
    description: Shanghai Jiao Tong University
  - name: Mingdong Wu
    link: https://aaronanima.github.io/
    image: /avatars/mingdong_wu.png
    description: Peking University
---
::

### Challenge Organizers

::avatar-list
---
avatars:
  - name: Hao Dong
    link: https://zsdonghao.github.io/
    image: /avatars/hao_dong.png
    description: Peking University
  - name: Bowen Wen
    link: https://wenbowen123.github.io/
    image: /avatars/bowen_wen.png
    description: NVIDIA
  - name: Ruida Zhang
    link: https://lolrudy.github.io/
    image: /avatars/ruida_zhang.png
    description: Tsinghua University
  - name: Junbo Wang
    link: https://dadadadawjb.github.io/
    image: https://dadadadawjb.github.io/assets/img/wjb_03.jpg
    description: Shanghai Jiao Tong University
  - name: Kai Xiong
    link: https://openreview.net/profile?id=~Kai_Xiong1
    image: /avatars/male.png
    description: Shanghai Jiao Tong University
  - name: Weiyao Huang
    link: https://github.com/sshwy
    image: /avatars/weiyao_huang.png
    description: Peking University
  - name: Yijia Weng
    link: https://yijiaweng.github.io/
    image: https://yijiaweng.github.io/images/yijia.png
    description: Stanford University
---
::