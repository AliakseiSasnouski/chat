import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.*;
import java.util.List;

public class MessageExchange {

    private JSONParser jsonParser = new JSONParser();

    public String getToken(int index) {
        Integer number = index * 8 + 11;
        return "TN" + number + "EN";
    }

    public int getIndex(String token) {
        return (Integer.valueOf(token.substring(2, token.length() - 2)) - 11) / 8;
    }

    public String getServerResponse(List<Message> messages) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("messages", messages);
        jsonObject.put("token", getToken(messages.size()));
        return jsonObject.toJSONString();
    }

    public Message getClientMessage(InputStream inputStream) throws IOException, ParseException {
        JSONObject json = getJSONObject(inputStreamToString(inputStream));
        return Message.parseMessage((JSONObject) json);
    }

    public String getErrorMessage(String text) {
        JSONObject jsonObject = new JSONObject();

        jsonObject.put("error", text);

        return jsonObject.toJSONString();
    }

    public JSONObject getJSONObject(String json) throws ParseException {
        return (JSONObject) jsonParser.parse(json.trim());
    }

    public String inputStreamToString(InputStream in) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int length = 0;

        while ((length = in.read(buffer)) != -1) {
            baos.write(buffer, 0, length);
        }

        System.out.println("Input stream " + new String(baos.toByteArray()));
        return new String(baos.toByteArray());
    }
}
