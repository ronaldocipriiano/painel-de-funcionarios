import { Employee } from '../types';

interface EmployeeRowProps {
  employee: Employee;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
}

const formatPhone = (phone: string) => {
  return phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    <tr>
      <td>
        <img src={employee.image} alt={employee.name} />
      </td>
      <td>{employee.name}</td>
      <td>{employee.job}</td>
      <td>{formatDate(employee.admission_date)}</td>
      <td>{formatPhone(employee.phone)}</td>
    </tr>
  );
};

export default EmployeeRow;
