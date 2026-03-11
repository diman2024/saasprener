// Планировщик задач (Scheduler)
// Ежедневные отчёты в 21:00 MSK

const cron = require('node-cron');
const telegramBot = require('./telegramBot');

let dailyReportJob = null;

function start() {
  const hour = process.env.DAILY_REPORT_HOUR || 21;
  const minute = process.env.DAILY_REPORT_MINUTE || 0;
  
  // Cron в формате: минуты часы * * *
  // 0 21 * * * = каждый день в 21:00
  const cronExpression = `${minute} ${hour} * * *`;
  
  dailyReportJob = cron.schedule(cronExpression, async () => {
    console.log(`📊 Running daily report at ${hour}:${String(minute).padStart(2, '0')} MSK`);
    
    try {
      await telegramBot.sendDailyReport();
    } catch (error) {
      console.error('❌ Daily report error:', error);
    }
  }, {
    timezone: 'Europe/Moscow'
  });
  
  console.log(`⏰ Daily report scheduled for ${hour}:${String(minute).padStart(2, '0')} MSK`);
}

function stop() {
  if (dailyReportJob) {
    dailyReportJob.stop();
    console.log('⏹️ Scheduler stopped');
  }
}

// Ручной запуск отчёта (для отладки)
async function runDailyReportNow() {
  console.log('📊 Manual daily report trigger');
  await telegramBot.sendDailyReport();
}

module.exports = {
  start,
  stop,
  runDailyReportNow
};
