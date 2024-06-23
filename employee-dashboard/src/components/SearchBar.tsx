interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisar por nome, cargo ou telefone"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
