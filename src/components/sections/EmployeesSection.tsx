import { employees } from '@/constants/data';

import Employee from './Employee';

export default function EmployeesSection() {
    return (
        <section>
            <div className="mx-auto max-w-3xl text-center text-lg">
                <h2 className="mt-2 text-4xl">Đội ngũ của chúng tôi</h2>
                <p className="mt-6">
                    Đội ngũ Kỹ thuật viên được RUM tuyển chọn dựa trên những tiêu chí nhất định và trải qua quá trình
                    đào tạo bài bản trước khi được thực chiến phục vụ Quý khách hàng!
                </p>
            </div>
            <ul className="mt-24 grid grid-cols-3 gap-10 md:mt-12 md:grid-cols-1">
                {employees.map((employee) => (
                    <li key={employee.name}>
                        <Employee {...employee} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
