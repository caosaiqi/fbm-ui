import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const QRCodeIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10,13 C10.5522847,13 11,13.4477153 11,14 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,14 C4,13.4477153 4.44771525,13 5,13 L10,13 Z M18.4744858,16.2036319 L18.5553723,16.2087781 C18.8901787,16.2552708 18.9970319,16.3750787 18.9994064,16.6325764 C18.9994064,17.6250155 19.0017809,18.6174545 18.9970319,19.6098936 C18.9946573,19.8638149 18.840314,19.944283 18.5696194,19.9925638 C18.3535387,20.0319037 18.0899677,19.9103076 18.0116087,19.7422188 C17.9997362,19.7153961 18.0021107,19.6832089 18.0021107,19.6545981 L18.0021107,18.0988828 C18.0021107,17.5767347 17.9973617,17.0563747 18.0021107,16.5342266 C18.0021107,16.2963989 18.3202955,16.1765909 18.5553723,16.2087781 Z M15.9695457,17.0098821 C16.185876,16.979483 16.4331106,17.1118082 16.4949192,17.279897 C16.502051,17.3049315 16.502051,17.3335424 16.502051,17.3567887 L16.502051,17.3567887 L16.502051,19.6456572 C16.4996737,19.9067312 16.1834987,20.024751 15.9196233,19.9871993 C15.6391071,19.9478593 15.5036035,19.8369923 15.5036035,19.5902236 C15.5036035,18.8552823 15.498849,18.1185527 15.5059807,17.3836114 C15.508358,17.1279019 15.6747659,17.0527984 15.9695457,17.0098821 Z M13.4855354,16.2052018 C13.7973254,16.2016254 13.9972517,16.3428915 13.9972517,16.5574729 C13.9996318,17.5838874 14.0020119,18.61209 13.9972517,19.6385045 C13.9948716,19.8673913 13.8020855,19.9871993 13.4950557,19.9907756 C13.2023064,19.994352 13,19.854874 13,19.6349281 L13,19.6349281 L13,16.5628375 C13,16.3536206 13.1927861,16.2087781 13.4855354,16.2052018 Z M9.5,14 L5.5,14 C5.25454011,14 5.05039163,14.1768752 5.00805567,14.4101244 L5,14.5 L5,18.5 C5,18.7454599 5.17687516,18.9496084 5.41012437,18.9919443 L5.5,19 L9.5,19 C9.74545989,19 9.94960837,18.8231248 9.99194433,18.5898756 L10,18.5 L10,14.5 C10,14.2238576 9.77614237,14 9.5,14 Z M8.7,15 C8.86568542,15 9,15.1343146 9,15.3 L9,17.7 C9,17.8656854 8.86568542,18 8.7,18 L6.3,18 C6.13431458,18 6,17.8656854 6,17.7 L6,15.3 C6,15.1343146 6.13431458,15 6.3,15 L8.7,15 Z M15.836508,13.020524 C16.1555217,12.9551466 16.510246,13.0408136 16.5031039,13.4691483 C16.4983425,13.8163249 16.5031039,14.161247 16.5031039,14.5061692 C16.5031039,14.8646177 16.5007232,15.2208119 16.5031039,15.577006 C16.5054846,15.8768403 16.1793287,16.0369022 15.9341167,15.9940688 C15.598438,15.9332001 15.50321,15.7551031 15.50321,15.4597776 L15.50321,15.4597776 L15.50321,13.4668939 C15.50321,13.2504722 15.6293871,13.0633575 15.836508,13.020524 Z M13.4410677,13.0039485 C13.5671247,13.0039485 13.6908034,13.001736 13.8073467,13.077193 C13.9381607,13.1615273 13.9952431,13.2769321 13.9952431,13.4123108 C14.0023784,13.805131 14,14.1957319 13.9976216,14.5885521 C13.9976216,14.8060457 13.7859408,14.9969075 13.5504757,15.0035655 C13.3839852,15.0080041 13.2412791,14.9747143 13.1176004,14.8593095 C13.0319767,14.7794138 13.0034355,14.6884216 13.0010571,14.5863327 C12.9986786,14.3865936 13.0010571,14.1868546 13.0010571,13.9871155 L13.0010571,13.9871155 L13.0010571,13.4100915 C13.0010571,13.1792819 13.1913319,13.0039485 13.4410677,13.0039485 Z M18.5345862,13.0004829 C18.7262868,13.0050556 18.9061541,13.1330918 18.958221,13.2748461 C18.979521,13.3320051 18.9984544,13.3914505 18.9984544,13.457755 C18.9984544,13.8189999 19.0031878,14.1825312 18.9960877,14.5437761 C18.9913544,14.8021348 18.8398872,14.9576073 18.579553,14.9941891 C18.3192188,15.0284845 18.0896514,14.9095937 18.0139178,14.6740986 C18.0044511,14.6420896 18.0044511,14.6077942 18.0044511,14.5734988 L18.0044511,14.5734988 L18.0044511,14.0019087 C18.0044511,13.8418635 18.0139178,13.6818183 18.0020845,13.521773 C17.976051,13.1811054 18.1961518,12.9890511 18.5345862,13.0004829 Z M10,4 C10.5522847,4 11,4.44771525 11,5 L11,10 C11,10.5522847 10.5522847,11 10,11 L5,11 C4.44771525,11 4,10.5522847 4,10 L4,5 C4,4.44771525 4.44771525,4 5,4 L10,4 Z M19,4 C19.5522847,4 20,4.44771525 20,5 L20,10 C20,10.5522847 19.5522847,11 19,11 L14,11 C13.4477153,11 13,10.5522847 13,10 L13,5 C13,4.44771525 13.4477153,4 14,4 L19,4 Z M9.5,5 L5.5,5 C5.25454011,5 5.05039163,5.17687516 5.00805567,5.41012437 L5,5.5 L5,9.5 C5,9.74545989 5.17687516,9.94960837 5.41012437,9.99194433 L5.5,10 L9.5,10 C9.74545989,10 9.94960837,9.82312484 9.99194433,9.58987563 L10,9.5 L10,5.5 C10,5.22385763 9.77614237,5 9.5,5 Z M18.5,5 L14.5,5 C14.2545401,5 14.0503916,5.17687516 14.0080557,5.41012437 L14,5.5 L14,9.5 C14,9.74545989 14.1768752,9.94960837 14.4101244,9.99194433 L14.5,10 L18.5,10 C18.7454599,10 18.9496084,9.82312484 18.9919443,9.58987563 L19,9.5 L19,5.5 C19,5.22385763 18.7761424,5 18.5,5 Z M8.7,6 C8.86568542,6 9,6.13431458 9,6.3 L9,8.7 C9,8.86568542 8.86568542,9 8.7,9 L6.3,9 C6.13431458,9 6,8.86568542 6,8.7 L6,6.3 C6,6.13431458 6.13431458,6 6.3,6 L8.7,6 Z M17.7,6 C17.8656854,6 18,6.13431458 18,6.3 L18,8.7 C18,8.86568542 17.8656854,9 17.7,9 L15.3,9 C15.1343146,9 15,8.86568542 15,8.7 L15,6.3 C15,6.13431458 15.1343146,6 15.3,6 L17.7,6 Z"
    />
  </SvgIcon>
);

export default QRCodeIcon;