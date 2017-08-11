export default function timespanToHumanString(startDate: string, endDate: string) {
  	let inter: number = +new Date(endDate) - +new Date(startDate);
  	let mess: string = '';
  	let minute: number = 60000,
        hour: number = 3600000,
        day: number = 86400000,
        month: number = 2628000000,
        year: number = 3.1536e+10;

  switch (true) {
    case inter <= 45000:
      mess = 'a few seconds ago';
      break;
    case inter <= 90000:
      mess = 'a minute ago';
      break;
    case inter <= 2700000:
      mess = -Math.round(-inter / minute) + ' minutes ago';
      break;
    case inter <= 5400000:
      mess = 'an hour ago';
      break;
    case inter <= 79200000:
      mess = -Math.round(-inter / hour) + ' hours ago';
      break;
    case inter <= 129600000:
      mess = 'a day ago';
      break;
    case inter <= 2160000000:
      mess = -Math.round(-inter / day) + ' days ago';
      break;
    case inter <= 3888000000:
      mess = 'a month ago';
      break;
    case inter <= 2.9808e+10:
      mess = -Math.round(-inter / month) + ' months ago';
      break;
    case inter <= 4.7088e+10:
      mess = 'a year ago';
      break;
    case inter > 4.7088e+10:
      mess = Math.round(inter / year) + ' years ago';
      break;

  }

  return mess;
}