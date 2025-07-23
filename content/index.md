---
title: 1st ICCV Workshop and Challenge on Category-Level Object Pose Estimation in the Wild
---

<p class="text-center">
  Oct. 20th, 2025 | ICCV workshop full-day session
</p>

## Summary

This workshop addresses the critical problem of category-level object pose estimation and its applications within complex robotic manipulation scenarios. Pose estimation, a fundamental challenge in both 3D computer vision and robotics perception, involves accurately determining an object's complete 6-degree-of-freedom (6DoF) pose, comprising its 3D rotation and translation. Our workshop specifically focuses on advancing category-level pose estimation methods under realistic and demanding robotic manipulation settings, particularly emphasizing articulated objects, dynamic environments with potential human-object interactions, and objects subject to severe occlusions and partial visibility.

## WCLOP 2025 Challenge

To facilitate rigorous evaluation and stimulate innovation, we organize the **WCLOP 2025 Challenge** with two complementary phases that address category-level object pose estimation in complex real-world scenarios. Unlike traditional instance-level methods that require known object meshes or reference images, our challenge addresses the more practical scenario where only object category information is available.

#### Phase 1: Category-Level Pose Estimation in Complex Real-World Scenarios

This phase aims to benchmark current methods of category-level pose estimation using diverse, challenging datasets representative of real-world robotics scenarios. Participants will be encouraged to develop robust, generalizable, and computationally efficient algorithms using the **Omni6DPose** and **PACE** datasets. These datasets provide diverse object categories, challenging occlusion scenarios, articulated objects, dynamic object-camera interactions, within-hand manipulation scenarios, and realistic lighting conditions that push the boundaries of current pose estimation methods for robotic manipulation applications.

#### Phase 2: Pose Estimation Evaluation Through Downstream Robotic Manipulation Tasks

The second phase assesses the practical efficacy of pose estimation methods by integrating them directly into downstream robotic manipulation tasks. The 6DoF pose has been established as a reliable and invariant representation, significantly bridging the simulation-to-real-world transfer gap. We will employ the ManiSkill simulation environment, featuring tasks such as opening microwaves, drawer manipulation, pick-and-place operations, in-hand rotation, and water pouring. Participants will use their Phase 1 trained models on Phase 2's test data, and their performance will be directly measured through manipulation task success rates.

**Phase 2 test data will be released in August.** The setting details will be announced then.

### Challenge Timeline

- **Training Data Release:** Available at launch
- **Phase 1 Submission Deadline:** September 15, 2025 (11:59 PM PST)
- **Phase 2 Test Data Release:** August 2025
- **Phase 2 Submission Deadline:** TBD
- **Results Announcement:** WCLOP 2025 Workshop at ICCV 2025
- **Awards Presentation:** WCLOP 2025 Workshop at ICCV 2025

**Challenge Details:** For complete challenge information, submission guidelines, and participation details, please visit our [Challenge Portal](https://www.codabench.org/competitions/9742/)

<!-- ![Example image (place image in public folder)](/img/teaser-min.png) -->

## Call for papers

We welcome submissions of full papers (up to 8 pages) and short papers (up to 4 pages), excluding references and appendices. All submissions must adhere to the ICCV 2025 format and will undergo peer review by domain experts. Accepted papers will be featured either as oral presentations or posters during the workshop. Topics of interest include, but are not limited to:

- Category-level 6D object pose estimation and tracking
- Open-vocabulary object segmentation and 6D pose estimation
- 6D pose estimation for optically challenging objects, such as transparent or reflective surfaces
- Pose-aware robotics: leveraging object pose in autonomous robotic systems

We encourage novel research that pushes the boundaries of category-level object pose estimation, with a focus on real-world challenges and applications.

**Paper Submission Portal:** [OpenReview WCLOP 2025](https://openreview.net/group?id=thecvf.com/ICCV/2025/Workshop/WCLOP)

### Paper Review Timeline

- Paper submission and supplemental material deadline: Sep. 22, 2025
- Notification to authors: Sep. 29, 2025

## Sponsorship

*Information about our sponsors will be updated soon. Stay tuned!*

<!-- Sponsor logos and information will be added here -->

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
    image: /avatars/jiyao_zhang.jpg
    description: Peking University
  - name: Jiankai Sun
    link: https://web.stanford.edu/~jksun/
    image: /avatars/jiankai_sun.jpg
    description: Stanford University
---
::

### Organizing Committee

::avatar-list
---
avatars:
  - name: Leonidas Guibas
    link: https://profiles.stanford.edu/leonidas-guibas
    image: /avatars/leonidas_guibas.jpg
    description: Stanford University
  - name: Chen Wang
    link: https://sairlab.org/team/chenw/
    image: /avatars/chen_wang.jpg
    description: University at Buffalo
  - name: Luca Carlone
    link: https://lucacarlone.mit.edu/
    image: /avatars/luca_carlone.png
    description: MIT
  - name: Linfang Zheng
    link: https://lynne-zheng-linfang.github.io/
    image: /avatars/linfang_zheng.png
    description: University of Birmingham
  - name: Mac Schwager
    link: https://web.stanford.edu/~schwager/
    image: /avatars/mac_schwager.jpg
    description: Stanford University
  - name: Cewu Lu
    link: https://www.mvig.org/
    image: /avatars/cewu_lu.jpg
    description: Shanghai Jiao Tong University
  - name: Ruihai Wu
    link: https://warshallrho.github.io/
    image: /avatars/ruihai_wu.jpeg
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
  - name: Yitong Peng
    link: #
    image: /avatars/male.png
    description: Peking University
  - name: Weiyao Huang
    link: https://github.com/sshwy
    image: /avatars/weiyao_huang.png
    description: Peking University
  - name: Mingdong Wu
    link: https://aaronanima.github.io/
    image: /avatars/mingdong_wu.png
    description: Peking University
  - name: Lixin Yang
    link: https://lixiny.github.io/
    image: /avatars/lixin_yang.jpg
    description: Shanghai Jiao Tong University
  - name: Junxiao Kong
    link: https://dawnx434.github.io/
    image: /avatars/junxiao_kong.jpg
    description: Shanghai Jiao Tong University
  - name: Junwen Huang
    link: https://demianjh.github.io/
    image: /avatars/junwen_huang.png
    description: Technical University of Munich
  - name: Weihang Li
    link: https://colin-de.github.io/
    image: /avatars/weihang_li.png
    description: Technical University of Munich
  - name: Yijia Weng
    link: https://yijiaweng.github.io/
    image: /avatars/yijia_weng.png
    description: Stanford University
  - name: Mandi Zhao
    link: https://mandizhao.github.io/
    image: /avatars/mandi_zhao.png
    description: Stanford University
  - name: Qiaojun Yu
    link: https://scholar.google.com/citations?user=hOxT8QUAAAAJ&hl=zh-CN
    image: /avatars/qiaojun_yu.jpg
    description: Shanghai Jiao Tong University
---
::