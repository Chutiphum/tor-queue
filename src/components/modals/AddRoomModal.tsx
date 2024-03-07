/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction, useState, forwardRef, ChangeEvent } from "react"
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker'
import dayjs from "dayjs"
import 'dayjs/locale/th'
dayjs.locale('th')
import axios from 'axios'

export default function AddRoomModal() {
  const [title, setTitle] = useState<string>('')
  const [qLimit, setQLimit] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const [enabled, setEnabled] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const today = new Date()
  const defaultFrom = { year: today.getFullYear(), month: today.getMonth(), day: today.getDate(), }
  const defaultTo = { year: today.getFullYear(), month: today.getMonth(), day: today.getDate()+1, }
  const defaultRange = { from: defaultFrom, to: defaultTo, }
  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange)

  const [fromTime, setFromTime] = useState('00:00')
  const [toTime, setToTime] = useState('00:00')

  const resetInput = () => {
    setTitle('')
    setQLimit(0)
    setDescription('')
    setSelectedDayRange(defaultRange)
    setFile(null)
    setFromTime('00:00')
    setToTime('00:00')
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // const items = Array.from(e.target.files)
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    const form = new FormData()
    form.append('title', title)
    form.append('description', description)
    if (enabled) form.append('enabled', 'true' )
    form.append(
      'startTime',
      new Date(
        selectedDayRange.from.year,
        selectedDayRange.from.month - 1,
        selectedDayRange.from.day,
        parseInt(fromTime.split(':')[0]),
        parseInt(fromTime.split(':')[1])
      ).toISOString()
    )
    form.append(
      'endTime',
      new Date(
        selectedDayRange.to.year,
        selectedDayRange.to.month - 1,
        selectedDayRange.to.day,
        parseInt(toTime.split(':')[0]),
        parseInt(toTime.split(':')[1])
      ).toISOString()
    )
    // @ts-ignore
    form.append('image', file)

    axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + '/api/room/create', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log(res.data)
        alert('Upload Successful')
        resetInput()
        // @ts-ignore
        document.getElementById('add_room_model').close()
      })
      .catch(err => {
        console.error(err)
        alert(err)
      })
  }

  return (
    <dialog
      id="add_room_model"
      className="modal modal-bottom sm:modal-middle overflow-scroll"
    >
      <div className="modal-box">
        <h3 className="text-3xl">สร้างคิวใหม่</h3>
        {/*  */}
        <form className="flex flex-col gap-2">
          <QueueItem title="ชื่อคิว" getter={title} setter={setTitle} />
          <QueueItem
            title="จำกัดคิว"
            getter={qLimit}
            setter={setQLimit}
            dataType="number"
          />
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">รายละเอียด</span>
              <span className="label-text-alt font-mono">
                {description.length}
              </span>
            </div>
          </label>

          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="รายละเอียด"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              <p className="text-sm">วันที่</p>
              <p className="text-xl">
                เริ่มต้น:{' '}
                {selectedDayRange.to
                  ? dayjs(
                      new Date(
                        selectedDayRange.from.year,
                        selectedDayRange.from.month - 1,
                        selectedDayRange.from.day,
                        parseInt(fromTime.split(':')[0]),
                        parseInt(fromTime.split(':')[1])
                      )
                    ).format('dd DD MMMM YYYY HH:mm')
                  : '-'}
              </p>
              <p className="text-xl">
                สิ้นสุด:{' '}
                {selectedDayRange.to
                  ? dayjs(
                      new Date(
                        selectedDayRange.to.year,
                        selectedDayRange.to.month - 1,
                        selectedDayRange.to.day,
                        parseInt(toTime.split(':')[0]),
                        parseInt(toTime.split(':')[1])
                      )
                    ).format('dd DD MMMM YYYY HH:mm')
                  : '-'}
              </p>
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
              <p>เวลาเริ่ม {fromTime}</p>
              <input
                type="time"
                value={fromTime}
                onChange={e => setFromTime(e.target.value)}
              />
              <p>เวลาสิ้นสุด {toTime}</p>
              <input
                type="time"
                value={toTime}
                onChange={e => setToTime(e.target.value)}
              />
            </div>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">ภาพประกอบ</span>
              {/* <span className="label-text-alt">{file.length} รูป</span> */}
            </div>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              onChange={handleFile}
            />
            <div className="label">
              <span className="label-text-alt">
                รองรับภาพประเทภ .jpg และ .png ขนาดไม่เกิน x MB
              </span>
            </div>
          </label>

          <ImageCarousel file={file} setFile={setFile} />

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-xl">
                เปิดคิวทันทีหลังจากสร้าง
              </span>
              <input
                type="checkbox"
                className="checkbox"
                value={enabled ? 'checked' : ''}
                onChange={e => setEnabled(!enabled)}
              />
            </label>
          </div>
        </form>
        {/*  */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn shadow-none border-none font-medium rounded-[50px] text-lg"
              onClick={resetInput}
            >
              ยกเลิก
            </button>
          </form>
          <button
            className="btn bg-primary hover:bg-secondary shadow-none border-none font-medium rounded-[50px] text-lg"
            onClick={handleSubmit}
          >
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

function ImageCarousel({
  file,
  setFile,
}: {
  file: File | null
  setFile: Dispatch<SetStateAction<File | null>>
}) {
  return file ? (
    <div className="carousel rounded-box h-48 gap-2 bg-gray-100 overflow-x-scroll">
      <div key={file.name} className="carousel-item group relative">
        <img
          src={URL.createObjectURL(file)}
          alt="Burger"
          className="rounded-2xl"
        />
        <button
          className="btn btn-error btn-xs absolute top-2 right-2 opacity-0 group-hover:opacity-100 font-medium"
          onClick={() => setFile(null)}
        >
          Delete {file.name}
        </button>
      </div>
    </div>
  ) : null
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

