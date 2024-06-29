export function Inputbox({heading,placeholder,onchange}) {
    return (
        <div>
            <div className="text-sm font-medium text-left py-2">
                {heading}
            </div>
                <input onchange={onchange} placeholder={placeholder} className="w-full px-2 py-1 border rounded  border-slate-500 "/>
        </div>
    )
}