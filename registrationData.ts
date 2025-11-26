interface SchoolData {
  sno: number;
  schoolName: string;
  district: string;
  registered: number[]; // Grades 1-12
  totalRegistered: number;
  participated: number[]; // Grades 1-12
  totalParticipated: number;
}

export const registrationData: SchoolData[] = [
  {
    sno: 1,
    schoolName: "Total",
    district: "",
    registered: [181, 196, 1142, 1181, 1264, 454, 438, 536, 448, 424, 0, 0],
    totalRegistered: 6264,
    participated: [91, 94, 668, 710, 725, 281, 315, 250, 258, 68, 0, 0],
    totalParticipated: 3460
  },
  {
    sno: 2,
    schoolName: "MPPS Inmulnarva",
    district: "Rangareddy",
    registered: [0, 0, 32, 26, 27, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 85,
    participated: [0, 0, 19, 14, 16, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 49
  },
  {
    sno: 3,
    schoolName: "MPPS DHAN SINGH THANDA",
    district: "Nalgonda",
    registered: [5, 3, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 14,
    participated: [4, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 11
  },
  {
    sno: 4,
    schoolName: "MPPS SEETHLA THANDA",
    district: "Nalgonda",
    registered: [2, 2, 6, 5, 3, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 18,
    participated: [2, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 11
  },
  {
    sno: 5,
    schoolName: "MPPS NEHATHAPURAM",
    district: "Nalgonda",
    registered: [5, 5, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 17,
    participated: [5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 12
  },
  {
    sno: 6,
    schoolName: "GPS Sriram Nagar",
    district: "Hyderabad",
    registered: [0, 0, 76, 109, 134, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 319,
    participated: [0, 0, 50, 64, 101, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 215
  },
  {
    sno: 7,
    schoolName: "MPPS Makthaguda",
    district: "Rangareddy",
    registered: [0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 12,
    participated: [0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 10
  },
  {
    sno: 8,
    schoolName: "MPPS Kodicharla Thanda",
    district: "Rangareddy",
    registered: [0, 0, 9, 2, 12, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 23,
    participated: [0, 0, 7, 2, 11, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 20
  },
  {
    sno: 9,
    schoolName: "MPPS Mallapur Thanda",
    district: "Rangareddy",
    registered: [0, 0, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 7,
    participated: [0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 6
  },
  {
    sno: 10,
    schoolName: "MPPS Kodicharla",
    district: "Rangareddy",
    registered: [0, 0, 7, 6, 6, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 19,
    participated: [0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 18
  },
  {
    sno: 11,
    schoolName: "GPS Allapur swaraj nagar",
    district: "Hyderabad",
    registered: [0, 0, 51, 60, 73, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 184,
    participated: [0, 0, 30, 34, 38, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 102
  },
  {
    sno: 12,
    schoolName: "GPS Saibabanagar Urdu Medium",
    district: "Hyderabad",
    registered: [0, 0, 25, 21, 17, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 63,
    participated: [0, 0, 17, 21, 16, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 54
  },
  {
    sno: 13,
    schoolName: "MPPS CHALAKURTHY",
    district: "Nalgonda",
    registered: [7, 13, 16, 11, 13, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 60,
    participated: [2, 5, 5, 3, 4, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 19
  },
  {
    sno: 14,
    schoolName: "GPS Sriram Nagar U/M",
    district: "Hyderabad",
    registered: [0, 0, 47, 61, 90, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 198,
    participated: [0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 3
  },
  {
    sno: 15,
    schoolName: "MPPS Chenchoni Thanda",
    district: "Nalgonda",
    registered: [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 4,
    participated: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 2
  },
  {
    sno: 16,
    schoolName: "MPUPS Thimmapur",
    district: "Rangareddy",
    registered: [0, 0, 20, 15, 15, 20, 15, 9, 0, 0, 0, 0],
    totalRegistered: 94,
    participated: [0, 0, 8, 8, 9, 8, 11, 7, 0, 0, 0, 0],
    totalParticipated: 51
  },
  {
    sno: 17,
    schoolName: "MPPS PEDDABAVI THANDA",
    district: "Nalgonda",
    registered: [3, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 8,
    participated: [2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 4
  },
  {
    sno: 18,
    schoolName: "MPUPS RANGUNDLA THANDA",
    district: "Nalgonda",
    registered: [22, 26, 17, 16, 10, 13, 18, 0, 0, 0, 0, 0],
    totalRegistered: 122,
    participated: [5, 5, 11, 7, 9, 12, 14, 0, 0, 0, 0, 0],
    totalParticipated: 63
  },
  {
    sno: 19,
    schoolName: "MPPS SB Pally",
    district: "Rangareddy",
    registered: [0, 0, 8, 1, 9, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 18,
    participated: [0, 0, 4, 1, 7, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 12
  },
  {
    sno: 20,
    schoolName: "GOVT. PS HILL COLONY NAGARJUNA SAGAR",
    district: "Nalgonda",
    registered: [4, 4, 12, 11, 11, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 42,
    participated: [3, 2, 7, 5, 7, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 24
  },
  {
    sno: 21,
    schoolName: "MPPS JAMMANAKOTA",
    district: "Nalgonda",
    registered: [2, 6, 4, 8, 3, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 23,
    participated: [0, 4, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 13
  },
  {
    sno: 22,
    schoolName: "MPPS NAYAKUNI THANDA",
    district: "Nalgonda",
    registered: [4, 16, 8, 3, 4, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 35,
    participated: [4, 10, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 25
  },
  {
    sno: 23,
    schoolName: "MPUPS BOYAGUDA",
    district: "Nalgonda",
    registered: [5, 6, 2, 2, 5, 1, 0, 0, 0, 0, 0, 0],
    totalRegistered: 21,
    participated: [4, 4, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 12
  },
  {
    sno: 24,
    schoolName: "MPPS Mekaguda",
    district: "Rangareddy",
    registered: [0, 0, 15, 6, 24, 18, 0, 0, 0, 0, 0, 0],
    totalRegistered: 63,
    participated: [0, 0, 8, 4, 18, 18, 0, 0, 0, 0, 0, 0],
    totalParticipated: 48
  },
  {
    sno: 25,
    schoolName: "GPS HS Cutters",
    district: "Hyderabad",
    registered: [0, 0, 39, 37, 34, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 110,
    participated: [0, 0, 26, 30, 25, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 81
  },
  {
    sno: 26,
    schoolName: "GPS Rajeevgandhi Nagar",
    district: "Hyderabad",
    registered: [0, 0, 13, 22, 14, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 49,
    participated: [0, 0, 7, 16, 11, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 34
  },
  {
    sno: 27,
    schoolName: "MPPS CHINTALAPALEM",
    district: "Nalgonda",
    registered: [7, 6, 14, 13, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 40,
    participated: [3, 3, 11, 13, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 30
  },
  {
    sno: 28,
    schoolName: "GPS Jyothinagar",
    district: "Hyderabad",
    registered: [0, 0, 6, 15, 15, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 36,
    participated: [0, 0, 6, 10, 10, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 26
  },
  {
    sno: 29,
    schoolName: "GPS Mahathma Nagar",
    district: "Hyderabad",
    registered: [0, 0, 26, 20, 23, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 69,
    participated: [0, 0, 19, 18, 19, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 56
  },
  {
    sno: 30,
    schoolName: "MPPS SREERAMPUR",
    district: "Nalgonda",
    registered: [3, 1, 2, 5, 3, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 14,
    participated: [3, 1, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 10
  },
  {
    sno: 31,
    schoolName: "MPPS Thatigadda Thanda",
    district: "Rangareddy",
    registered: [0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 7,
    participated: [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 6
  },
  {
    sno: 32,
    schoolName: "GPS NSB Nagar",
    district: "Hyderabad",
    registered: [9, 7, 45, 43, 38, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 142,
    participated: [0, 0, 30, 27, 25, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 82
  },
  {
    sno: 33,
    schoolName: "GPS Karmikanagar",
    district: "Hyderabad",
    registered: [0, 0, 24, 18, 16, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 58,
    participated: [0, 0, 14, 12, 10, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 36
  },
  {
    sno: 34,
    schoolName: "ZPHS Kothur",
    district: "Hyderabad",
    registered: [0, 0, 0, 0, 0, 81, 99, 190, 103, 103, 0, 0],
    totalRegistered: 576,
    participated: [0, 0, 0, 0, 0, 49, 64, 55, 62, 68, 0, 0],
    totalParticipated: 298
  },
  {
    sno: 35,
    schoolName: "MPPS PYLON COLONY",
    district: "Nalgonda",
    registered: [9, 4, 11, 9, 8, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 41,
    participated: [3, 3, 7, 8, 5, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 26
  },
  {
    sno: 36,
    schoolName: "GPS Saibaba Nagar",
    district: "Hyderabad",
    registered: [0, 0, 37, 40, 34, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 111,
    participated: [0, 0, 20, 25, 24, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 69
  },
  {
    sno: 37,
    schoolName: "MPPS Kothur U/M",
    district: "Rangareddy",
    registered: [0, 0, 26, 20, 11, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 57,
    participated: [0, 0, 18, 9, 6, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 33
  },
  {
    sno: 38,
    schoolName: "MPPS Siddapur",
    district: "Rangareddy",
    registered: [0, 0, 18, 20, 24, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 62,
    participated: [0, 0, 10, 16, 19, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 45
  },
  {
    sno: 39,
    schoolName: "MPPS Stn Thimmapur",
    district: "Rangareddy",
    registered: [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 12,
    participated: [0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 7
  },
  {
    sno: 40,
    schoolName: "GPS Karmikanagar U/M",
    district: "Hyderabad",
    registered: [0, 0, 10, 8, 7, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 25,
    participated: [0, 0, 6, 5, 4, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 15
  },
  {
    sno: 41,
    schoolName: "ZPHS thirumalagiri Sagar",
    district: "Nalgonda",
    registered: [0, 0, 0, 0, 0, 28, 39, 51, 49, 82, 0, 0],
    totalRegistered: 249,
    participated: [0, 0, 0, 0, 0, 19, 27, 1, 0, 0, 0, 0],
    totalParticipated: 47
  },
  {
    sno: 42,
    schoolName: "MPPS Sangiguda",
    district: "Rangareddy",
    registered: [0, 0, 4, 9, 3, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 16,
    participated: [0, 0, 3, 6, 2, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 11
  },
  {
    sno: 43,
    schoolName: "GPS Vinayak Nagar",
    district: "Hyderabad",
    registered: [0, 0, 29, 32, 30, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 91,
    participated: [0, 0, 19, 18, 23, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 60
  },
  {
    sno: 44,
    schoolName: "MPPS YELLAPURAM THANDA",
    district: "Nalgonda",
    registered: [7, 5, 7, 9, 11, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 39,
    participated: [3, 1, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 17
  },
  {
    sno: 45,
    schoolName: "MPUPS Rangapur",
    district: "Rangareddy",
    registered: [0, 0, 10, 9, 16, 9, 6, 0, 0, 0, 0, 0],
    totalRegistered: 50,
    participated: [0, 0, 9, 9, 12, 8, 4, 0, 0, 0, 0, 0],
    totalParticipated: 42
  },
  {
    sno: 46,
    schoolName: "GPS Prabath Nagar",
    district: "Hyderabad",
    registered: [0, 0, 95, 136, 161, 0, 0, 4, 0, 0, 0, 0],
    totalRegistered: 396,
    participated: [0, 0, 69, 84, 94, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 247
  },
  {
    sno: 47,
    schoolName: "MPPS Kothur Thanda",
    district: "Rangareddy",
    registered: [0, 0, 13, 5, 3, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 21,
    participated: [0, 0, 9, 4, 2, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 15
  },
  {
    sno: 48,
    schoolName: "MPPS NELLIKAL",
    district: "Nalgonda",
    registered: [4, 9, 8, 10, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 31,
    participated: [1, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 9
  },
  {
    sno: 49,
    schoolName: "MPPS Penjarla",
    district: "Rangareddy",
    registered: [0, 0, 25, 18, 22, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 65,
    participated: [0, 0, 15, 11, 15, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 41
  },
  {
    sno: 50,
    schoolName: "MPPS NAGARJUNA PETA",
    district: "Nalgonda",
    registered: [5, 6, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 16,
    participated: [1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 5
  },
  {
    sno: 51,
    schoolName: "MPUPS KOMPALLY",
    district: "Nalgonda",
    registered: [11, 13, 15, 13, 4, 0, 3, 0, 0, 0, 0, 0],
    totalRegistered: 59,
    participated: [7, 8, 11, 10, 3, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 39
  },
  {
    sno: 52,
    schoolName: "MPPS Kothur H/W",
    district: "Rangareddy",
    registered: [0, 0, 15, 39, 37, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 91,
    participated: [0, 0, 11, 20, 23, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 54
  },
  {
    sno: 53,
    schoolName: "MPPS TIRUMALAGIRI",
    district: "Nalgonda",
    registered: [11, 11, 17, 14, 18, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 71,
    participated: [7, 8, 12, 9, 7, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 43
  },
  {
    sno: 54,
    schoolName: "MPPS Mallapur",
    district: "Rangareddy",
    registered: [0, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 8,
    participated: [0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 7
  },
  {
    sno: 55,
    schoolName: "MPPS PARVEDULA",
    district: "Nalgonda",
    registered: [4, 1, 7, 11, 11, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 34,
    participated: [4, 1, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 12
  },
  {
    sno: 56,
    schoolName: "MPPS SILGAPUR",
    district: "Nalgonda",
    registered: [22, 24, 15, 16, 7, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 84,
    participated: [12, 18, 11, 16, 5, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 62
  },
  {
    sno: 57,
    schoolName: "MPPS PALTHI THANDA",
    district: "Nalgonda",
    registered: [9, 11, 8, 0, 5, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 33,
    participated: [7, 5, 7, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 21
  },
  {
    sno: 58,
    schoolName: "Natco Borabanda High School",
    district: "Hyderabad",
    registered: [1, 0, 1, 1, 1, 271, 242, 282, 296, 239, 0, 0],
    totalRegistered: 1334,
    participated: [1, 0, 1, 1, 1, 161, 188, 187, 196, 0, 0, 0],
    totalParticipated: 736
  },
  {
    sno: 59,
    schoolName: "MPPS RAJAVARAM",
    district: "Nalgonda",
    registered: [8, 4, 6, 7, 11, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 36,
    participated: [4, 1, 3, 5, 3, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 16
  },
  {
    sno: 60,
    schoolName: "MPPS JALTHANDA",
    district: "Nalgonda",
    registered: [12, 10, 7, 13, 2, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 44,
    participated: [4, 2, 4, 11, 2, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 23
  },
  {
    sno: 61,
    schoolName: "MPPS SUNKISHALA THANDA",
    district: "Nalgonda",
    registered: [0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 5,
    participated: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 2
  },
  {
    sno: 62,
    schoolName: "GPS Jawahar Nagar",
    district: "Hyderabad",
    registered: [0, 0, 126, 113, 151, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 390,
    participated: [0, 0, 49, 65, 67, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 181
  },
  {
    sno: 63,
    schoolName: "MPPS Kothur",
    district: "Rangareddy",
    registered: [0, 1, 44, 46, 59, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 150,
    participated: [0, 1, 26, 19, 35, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 81
  },
  {
    sno: 64,
    schoolName: "MPPS Theegapur",
    district: "Rangareddy",
    registered: [0, 0, 9, 11, 8, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 28,
    participated: [0, 0, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 14
  },
  {
    sno: 65,
    schoolName: "MPPS Chintagattu Thanda",
    district: "Rangareddy",
    registered: [0, 0, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0],
    totalRegistered: 8,
    participated: [0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    totalParticipated: 5
  },
  {
    sno: 66,
    schoolName: "MPUPS Kummariguda",
    district: "Rangareddy",
    registered: [0, 0, 10, 8, 10, 13, 16, 0, 0, 0, 0, 0],
    totalRegistered: 57,
    participated: [0, 0, 5, 6, 8, 6, 7, 0, 0, 0, 0, 0],
    totalParticipated: 32
  }
];