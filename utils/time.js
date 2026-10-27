/**
 * 把时间戳转成「多久以前」的中文描述
 * @param {number} ts 毫秒时间戳
 */

export function timeAgo(ts) {
	const diff = Date.now() - ts;

	if (diff < 0) return "刚刚" // 时间在未来
	if (diff < 60 * 1000) return "刚刚"
	if (diff < 60 * 60 * 1000) return Math.floor(diff / 60000) + "分钟前" // < 1小时
	if (diff < 24 * 60 * 60 * 1000) return Math.floor(diff / 3600000) + "小时前" // < 1天
	if (diff < 2 * 24 * 60 * 60 * 1000) return "昨天" // < 2天
	if (diff < 7 * 24 * 60 * 60 * 1000) return Math.floor(diff / 86400000) + "天前"
	const d = new Date(ts) // 超过一周，显示日期
	return `${d.getMonth() + 1}月${d.getDate()}日`
}
