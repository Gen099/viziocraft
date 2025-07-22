import { useState, useEffect } from 'react';

interface CompanyData {
  company: any;
  services: any[];
  founder: any;
}

export const useCompanyData = () => {
  const [data, setData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/company-main.json');
        if (!response.ok) {
          throw new Error('Failed to fetch company data');
        }
        const companyData = await response.json();
        setData(companyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};