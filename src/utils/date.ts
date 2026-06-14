import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export const formatDate = (date: string): string => {
  return dayjs(date).format('YYYY年MM月DD日')
}

export const formatDateShort = (date: string): string => {
  return dayjs(date).format('MM-DD')
}

export const getRelativeTime = (date: string): string => {
  const now = dayjs()
  const target = dayjs(date)
  const diffDays = now.diff(target, 'day')

  if (diffDays < 1) {
    return '今天'
  } else if (diffDays < 7) {
    return `${diffDays}天前`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks}周前`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months}个月前`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years}年前`
  }
}

export const getYearMonth = (date: string): string => {
  return dayjs(date).format('YYYY年MM月')
}
