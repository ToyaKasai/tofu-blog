import dayjs from 'dayjs';

type FormatTemplate = 'YYYY/M/D HH:mm';

export const formatDateTimeString = (dateTimeString: string, template: FormatTemplate) => {
  return dayjs(dateTimeString).locale('ja').format(template);
};

export const generateSeoTitle = (title: string) => {
  return `${title} - ToyaKasai`;
};
