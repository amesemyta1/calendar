import React from 'react';

const DeleteEventBtn = ({ id, deleteEventHandler }) => {
  return (
    <button className="delete-event-btn" onClick={() => deleteEventHandler(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="18px"
        height="18px"
      >
        <path d="M 41.59375 8 A 2.0002 2.0002 0 0 0 39.59375 10 L 39.59375 16.326172 A 2.0002 2.0002 0 0 0 39.691406 16.964844 C 34.38242 17.054064 29.069744 17.069885 23.767578 17.320312 A 2.0002 2.0002 0 0 0 23.765625 17.322266 C 20.840446 17.463932 18.507812 19.914545 18.507812 22.841797 L 18.507812 28.978516 A 2.0002 2.0002 0 0 0 20.390625 30.974609 C 21.497562 31.038723 22.616125 31.090025 23.728516 31.148438 C 22.802894 52.879245 24.799478 70.542624 23.78125 86.839844 A 2.0002 2.0002 0 0 0 25.240234 88.890625 C 40.679054 93.198822 58.574721 92.883413 74.753906 88.908203 A 2.0002 2.0002 0 0 0 76.275391 87.013672 C 76.552998 75.413344 76.227703 62.789271 75.224609 49.015625 L 76.216797 31.109375 C 77.022931 31.06063 77.816122 31.026506 78.626953 30.972656 A 2.0002 2.0002 0 0 0 80.494141 28.978516 L 80.494141 22.037109 A 2.0002 2.0002 0 0 0 80.341797 21.273438 C 79.973408 19.160633 78.241382 17.472635 76.037109 17.369141 A 2.0002 2.0002 0 0 0 76.035156 17.369141 C 70.82914 17.130977 65.632172 17.096492 60.431641 16.992188 A 2.0002 2.0002 0 0 0 60.462891 16.628906 L 60.462891 10 A 2.0002 2.0002 0 0 0 58.462891 8 L 41.59375 8 z M 43.59375 12 L 56.462891 12 L 56.462891 16.628906 A 2.0002 2.0002 0 0 0 56.478516 16.898438 C 52.157293 16.841078 47.838528 16.838729 43.521484 16.880859 A 2.0002 2.0002 0 0 0 43.59375 16.326172 L 43.59375 12 z M 49.869141 20.738281 C 58.51748 20.752981 67.17858 20.968614 75.849609 21.365234 C 76.230484 21.383114 76.492188 21.656728 76.492188 22.037109 A 2.0002 2.0002 0 0 0 76.494141 22.070312 L 76.494141 27.072266 C 57.420281 28.249395 39.665123 27.983687 22.507812 27.041016 L 22.507812 22.841797 C 22.507812 22.007703 23.125197 21.357662 23.957031 21.316406 C 32.582383 20.909019 41.219502 20.723584 49.869141 20.738281 z M 72.197266 31.337891 L 71.255859 48.318359 C 69.52722 49.042401 67.689513 49.0625 64.787109 49.0625 A 1.0001 1.0001 0 1 0 64.787109 51.0625 C 67.367106 51.0625 69.382462 51.060729 71.3125 50.427734 C 72.198496 63.033795 72.478354 74.589321 72.273438 85.302734 C 63.553072 87.303749 54.36397 88.181735 45.435547 87.824219 L 45.996094 86.125 A 1.0001 1.0001 0 0 0 45.054688 84.798828 A 1.0001 1.0001 0 0 0 44.095703 85.498047 L 43.363281 87.720703 C 42.434881 87.663075 41.510404 87.591053 40.589844 87.505859 L 41.587891 86.103516 A 1.0001 1.0001 0 0 0 40.785156 84.511719 A 1.0001 1.0001 0 0 0 39.958984 84.943359 L 38.302734 87.269531 C 37.569554 87.182512 36.839527 87.085609 36.113281 86.980469 L 37.214844 84.775391 A 1.0001 1.0001 0 0 0 36.275391 83.316406 A 1.0001 1.0001 0 0 0 35.425781 83.880859 L 34.042969 86.646484 C 33.03005 86.473702 32.024713 86.285603 31.029297 86.076172 L 32.470703 83.193359 A 1.0001 1.0001 0 0 0 31.53125 81.736328 A 1.0001 1.0001 0 0 0 30.683594 82.298828 L 29.101562 85.462891 A 1.0001 1.0001 0 0 0 29.03125 85.625 C 28.625891 85.528273 28.21626 85.439008 27.814453 85.335938 C 28.631438 69.070358 26.847871 51.995771 27.724609 31.353516 C 29.084158 31.415544 30.455422 31.465316 31.824219 31.517578 L 30.681641 33.802734 A 1.0001 1.0001 0 1 0 32.470703 34.695312 L 34.017578 31.603516 C 34.923395 31.634331 35.839788 31.65354 36.75 31.679688 L 35.953125 33.275391 A 1.0001165 1.0001165 0 1 0 37.742188 34.169922 L 38.957031 31.738281 C 40.02997 31.764383 41.100216 31.793368 42.179688 31.8125 L 40.970703 33.464844 A 1.0001 1.0001 0 1 0 42.583984 34.646484 L 44.636719 31.841797 C 45.413954 31.851582 46.18987 31.863209 46.970703 31.869141 L 46.052734 33.958984 A 1.0001 1.0001 0 1 0 47.882812 34.763672 L 49.146484 31.886719 C 49.980243 31.889101 50.825997 31.877244 51.664062 31.875 L 50.650391 33.902344 A 1.0001161 1.0001161 0 1 0 52.439453 34.796875 L 53.90625 31.867188 C 54.816557 31.860174 55.723038 31.856501 56.638672 31.84375 L 55.816406 34.478516 A 1.0004447 1.0004447 0 1 0 57.726562 35.074219 L 58.748047 31.798828 C 59.675707 31.781429 60.603735 31.765756 61.537109 31.742188 L 60.818359 32.882812 A 1.0001 1.0001 0 1 0 62.509766 33.947266 L 63.9375 31.681641 C 65.056845 31.647039 66.192369 31.594689 67.320312 31.550781 L 66.599609 33.589844 A 1.000736 1.000736 0 1 0 68.486328 34.257812 L 69.472656 31.466797 C 70.378294 31.426853 71.285859 31.38409 72.197266 31.337891 z M 36.433594 36.410156 C 35.581709 36.410156 34.764646 36.759702 34.175781 37.375 A 1.0001 1.0001 0 0 0 34.175781 37.376953 C 33.588601 37.992025 33.275272 38.822028 33.314453 39.673828 C 33.466814 43.026758 33.736023 48.965896 33.738281 49.015625 L 32.6875 67.402344 A 1.0001 1.0001 0 0 0 32.6875 67.501953 C 32.6875 67.501953 32.955373 73.682713 33.109375 77.21875 A 1.0001 1.0001 0 0 0 33.109375 77.220703 C 33.191355 79.090921 34.750434 80.583984 36.623047 80.583984 L 37.701172 80.583984 C 39.22695 80.583984 40.484375 79.32656 40.484375 77.800781 L 40.484375 51.644531 A 1.0001 1.0001 0 1 0 38.484375 51.644531 L 38.484375 77.800781 C 38.484375 78.245003 38.145394 78.583984 37.701172 78.583984 L 36.623047 78.583984 C 35.801659 78.583984 35.143444 77.954595 35.107422 77.132812 C 34.954012 73.61036 34.689542 67.500047 34.6875 67.453125 L 35.738281 49.066406 A 1.0001 1.0001 0 0 0 35.738281 48.962891 C 35.738281 48.962891 35.465502 42.951031 35.3125 39.583984 A 1.0001 1.0001 0 0 0 35.3125 39.582031 C 35.29825 39.27652 35.41068 38.980267 35.623047 38.757812 C 35.83607 38.535961 36.1281 38.410156 36.433594 38.410156 L 36.460938 38.410156 C 36.997141 38.410156 37.510821 38.624802 37.890625 39.003906 C 38.269959 39.383911 38.484375 39.898717 38.484375 40.435547 L 38.484375 45.845703 A 1.0001 1.0001 0 1 0 40.484375 45.845703 L 40.484375 40.435547 C 40.484375 39.368376 40.059306 38.343839 39.306641 37.589844 C 38.552575 36.835778 37.528108 36.410156 36.460938 36.410156 L 36.433594 36.410156 z M 62.263672 36.410156 C 61.411788 36.410156 60.596678 36.759702 60.007812 37.375 A 1.0001 1.0001 0 0 0 60.005859 37.376953 C 59.418679 37.992025 59.107304 38.822028 59.146484 39.673828 C 59.298527 43.019763 59.566941 48.921823 59.570312 48.996094 L 58.519531 67.402344 A 1.0001 1.0001 0 0 0 58.517578 67.501953 C 58.517578 67.501953 58.787405 73.682713 58.941406 77.21875 C 59.022036 79.089903 60.580513 80.583984 62.453125 80.583984 L 63.53125 80.583984 C 65.057028 80.583984 66.314453 79.32656 66.314453 77.800781 L 66.314453 54.808594 A 1.0001 1.0001 0 1 0 64.314453 54.808594 L 64.314453 77.800781 C 64.314453 78.245003 63.975472 78.583984 63.53125 78.583984 L 62.453125 78.583984 C 61.631737 78.583984 60.974824 77.95366 60.939453 77.132812 C 60.786352 73.617453 60.520682 67.54397 60.517578 67.472656 L 61.570312 49.066406 A 1.0001 1.0001 0 0 0 61.570312 48.962891 C 61.570312 48.962891 61.297533 42.951031 61.144531 39.583984 A 1.0001 1.0001 0 0 0 61.144531 39.582031 C 61.130281 39.27652 61.240761 38.980267 61.453125 38.757812 C 61.66626 38.535111 61.957556 38.410156 62.263672 38.410156 L 62.292969 38.410156 C 62.829798 38.410156 63.342722 38.623972 63.722656 39.003906 C 64.102175 39.383425 64.314453 39.897886 64.314453 40.435547 L 64.314453 45.845703 A 1.0001 1.0001 0 1 0 66.314453 45.845703 L 66.314453 40.435547 C 66.314453 39.369208 65.8912 38.344325 65.136719 37.589844 C 64.382653 36.835778 63.360139 36.410156 62.292969 36.410156 L 62.263672 36.410156 z M 49.263672 37.46875 C 47.396969 37.46875 45.840902 38.951261 45.751953 40.816406 A 1.0001 1.0001 0 0 0 45.751953 40.818359 L 45.337891 49.490234 A 1.0001 1.0001 0 0 0 45.337891 49.595703 L 46.390625 68.005859 C 46.387725 68.080319 46.097483 75.597254 45.949219 79.453125 C 45.916879 80.299816 46.23052 81.124976 46.818359 81.736328 C 47.406531 82.348027 48.21984 82.693359 49.068359 82.693359 L 49.113281 82.693359 C 50.180452 82.693359 51.204919 82.26969 51.958984 81.515625 A 1.0001 1.0001 0 0 0 51.958984 81.513672 C 52.71165 80.759676 53.136719 79.737092 53.136719 78.669922 L 53.136719 71.150391 A 1.0001 1.0001 0 1 0 51.136719 71.150391 L 51.136719 78.669922 C 51.136719 79.206751 50.922303 79.721559 50.542969 80.101562 C 50.163034 80.481498 49.650111 80.693359 49.113281 80.693359 L 49.068359 80.693359 C 48.762879 80.693359 48.473547 80.56991 48.261719 80.349609 C 48.049558 80.128962 47.937558 79.834606 47.949219 79.529297 C 48.098221 75.654244 48.390625 68.027344 48.390625 68.027344 A 1.0001 1.0001 0 0 0 48.388672 67.931641 L 47.337891 49.533203 L 47.748047 40.912109 C 47.787097 40.093255 48.444375 39.46875 49.263672 39.46875 L 50.351562 39.46875 C 50.559587 39.46875 50.758405 39.54942 50.90625 39.697266 C 51.054095 39.845111 51.136719 40.045882 51.136719 40.253906 L 51.136719 65.353516 A 1.0001 1.0001 0 1 0 53.136719 65.353516 L 53.136719 40.253906 C 53.136719 39.515931 52.842467 38.805358 52.320312 38.283203 C 51.798158 37.761048 51.089539 37.46875 50.351562 37.46875 L 49.263672 37.46875 z M 69.005859 72.203125 C 68.423859 72.203125 67.951172 72.675812 67.951172 73.257812 C 67.951172 73.839812 68.423859 74.3125 69.005859 74.3125 C 69.587859 74.3125 70.058594 73.839813 70.058594 73.257812 C 70.058594 72.675812 69.587859 72.203125 69.005859 72.203125 z M 69.664062 77.9375 A 1.054 1.054 0 0 0 69.664062 80.046875 A 1.054 1.054 0 0 0 69.664062 77.9375 z M 66.298828 82.580078 A 1.054 1.054 0 0 0 66.298828 84.6875 A 1.054 1.054 0 0 0 66.298828 82.580078 z" />
      </svg>
    </button>
  );
};

export default DeleteEventBtn;
