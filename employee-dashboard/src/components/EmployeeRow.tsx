import { Employee } from '../types';

interface EmployeeRowProps {
  employee: Employee;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    <tr>
      <td>
        <img src={employee.image} alt={employee.name} />
      </td>
      <td>{employee.name}</td>
      <td>{employee.job}</td>
      <td>{new Date(employee.admission_date).toLocaleDateString()}</td>
      <td>{employee.phone}</td>
    </tr>
  );
};

export default EmployeeRow;
