import API from "@/other/baseURL";

interface handleSendLetterTypes {
  name: string;
  phone_number: string;
  purpose: string;
  comment: string;
}

function useMail() {
  const handleSendLetter = async (data: handleSendLetterTypes) => {
    try {
      const res = await API.post("/api/send_email", data);

      if (!res.data) throw new Error("ersh");

      return { data: res.data };
    } catch (e) {
      return { error: e };
    }
  };

  return {
    handleSendLetter: handleSendLetter,
  };
}

export default useMail;
