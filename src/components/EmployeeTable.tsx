import { useState, useEffect } from 'react';
import { Employee } from '../types';
import EmployeeRow from './EmployeeRow';

interface EmployeeTableProps {
  searchQuery: string;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ searchQuery }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.job.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de Admissão</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
