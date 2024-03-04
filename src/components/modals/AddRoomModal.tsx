import { Dispatch, SetStateAction, useState, forwardRef } from "react"
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar } from "react-modern-calendar-datepicker"
import dayjs from "dayjs"
import 'dayjs/locale/th'
dayjs.locale('th')

export default function AddRoomModal() {
  const [title, setTitle] = useState<string>('')
  const [qLimit, setQLimit] = useState<number>(0)
  const [description, setDescription] = useState<string>('')

  const today = new Date()
  const defaultFrom = { year: today.getFullYear(), month: today.getMonth(), day: today.getDate(), }
  const defaultTo = { year: today.getFullYear(), month: today.getMonth(), day: today.getDate()+1, }
  const defaultRange = { from: defaultFrom, to: defaultTo, }
  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange)

  const resetInput = () => {
    setTitle('')
    setQLimit(0)
    setDescription('')
    setSelectedDayRange(defaultRange)
  }

  const handleSubmit = async () => {
    console.log('kill ypurself')
    // await something()
    // maybe add notification
    // resetInput()
    // @ts-ignore
    document.getElementById('add_room_model').close()
  }

  return (
    <dialog id="add_room_model" className="modal modal-bottom sm:modal-middle overflow-scroll">
      <div className="modal-box">
        <h3 className="text-3xl">สร้างคิวใหม่</h3>
        {/*  */}
        <form className="flex flex-col gap-2">
          <QueueItem title="ชื่อคิว" getter={title} setter={setTitle} />
          <QueueItem title="จำกัดคิว" getter={qLimit} setter={setQLimit} dataType="number" />
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">รายละเอียด</span>
              <span className="label-text-alt font-mono">{description.length}</span>
            </div>
          </label>

          <textarea className="textarea textarea-bordered h-24" placeholder="รายละเอียด" value={description}
            onChange={e => setDescription(e.target.value)} />

          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              <p className="text-sm">วันที่</p>
              <p className="text-xl">เริ่มต้น: {selectedDayRange.to ?
                dayjs(new Date(
                  selectedDayRange.from.year,
                  selectedDayRange.from.month - 1,
                  selectedDayRange.from.day
              )).format('dd DD MMMM YYYY') : '-'}</p>
              <p className="text-xl">สิ้นสุด: {selectedDayRange.to ?
                dayjs(new Date(
                  selectedDayRange.to.year,
                  selectedDayRange.to.month-1,
                  selectedDayRange.to.day
              )).format('dd DD MMMM YYYY') : '-'}</p>
            </div>
            <div className="collapse-content">
              <Calendar
                value={selectedDayRange}
                // @ts-ignore
                onChange={setSelectedDayRange}
                locale={myCustomLocale}
                shouldHighlightWeekends
                calendarClassName="text-lg"
              />
            </div>
          </div>
        </form>
        {/*  */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn shadow-none border-none font-medium rounded-[50px] text-lg" onClick={resetInput}>ยกเลิก</button>
          </form>
          <button className="btn bg-primary hover:bg-secondary shadow-none border-none font-medium rounded-[50px] text-lg" onClick={handleSubmit}>
            เพิ่มห้องคิว
          </button>
        </div>
      </div>
    </dialog>
  )
}

function QueueItem({
  title, getter, setter, dataType
}: {
  title: string,
  getter: any,
  setter: Dispatch<SetStateAction<any>>,
  dataType?: string
}) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input type={dataType || 'text'} min={0} title={getter} placeholder={title}
        value={getter} onChange={e => setter(e.target.value)}
        className="input input-bordered w-full" />
    </label>
  )
}

const myCustomLocale = {
  // months list by order
  months: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ],

  // week days by order
  weekDays: [
    {
      name: 'วันอาทิตย์', // used for accessibility 
      short: 'อา', // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: 'วันจันทร์',
      short: 'จ',
    },
    {
      name: 'วันอังคาร',
      short: 'อ',
    },
    {
      name: 'วันพุธ',
      short: 'พ',
    },
    {
      name: 'วันพฤหัสบดี',
      short: 'พฤ',
    },
    {
      name: 'วันศุกร์',
      short: 'ศ',
    },
    {
      name: 'วันเสาร์',
      short: 'ส',
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: any) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: any) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: any) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit: any) {
    return digit;
  },

  // texts in the date picker
  nextMonth: 'เดือนถัดไป',
  previousMonth: 'เดือนก่อนหน้า',
  openMonthSelector: 'เปิดตัวเลือกเดือน',
  openYearSelector: 'เปิดตัวเลือกปี',
  closeMonthSelector: 'ปิดตัวเลือกเดือน',
  closeYearSelector: 'ปิดตัวเลือกปี',
  defaultPlaceholder: 'เลือก...',

  // for input range value
  from: 'ตั้งแต่',
  to: 'ถึง',

  // used for input value when multi dates are selected
  digitSeparator: ',',

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};

