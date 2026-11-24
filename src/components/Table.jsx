import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

export function TableFooter({ shown = '0 of 0' }) {
  return (
    <div className="table-foot">
      <div className="rows">
        <span>Showing {shown}</span>
        <span style={{ marginLeft: 8 }}>Rows per page</span>
        <select defaultValue="10">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
      <div className="pager">
        <button aria-label="Previous"><ChevronLeft size={16} /></button>
        <button className="cur">1</button>
        <button aria-label="Next"><ChevronRight size={16} /></button>
      </div>
    </div>
  )
}

export { ChevronDown }
