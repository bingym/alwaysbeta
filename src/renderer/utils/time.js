import dayjs from 'dayjs'

export function formatDatetime(s) {
	return dayjs(s).format('YYYY-MM-DD HH:mm:ss');
}

export function formatDate(s) {
	return dayjs(s).format('YYYY-MM-DD');
}